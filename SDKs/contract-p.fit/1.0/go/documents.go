package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"openapi/pkg/models/shared"
	"strings"
)

type Documents struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewDocuments(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Documents {
	return &Documents{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// DeleteDocumentResource - Delete the document
// Completely delete the document.
//
// **WARNING** This removes the document from our system: it will not be recoverable
//
// **Permission required:** review
func (s *Documents) DeleteDocumentResource(ctx context.Context, request operations.DeleteDocumentResourceRequest) (*operations.DeleteDocumentResourceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/documents/{document_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "DELETE", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.DeleteDocumentResourceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 403:
	}

	return res, nil
}

// GetDocumentOriginalFileResource - Get document original file
// Return the document original file, as attachment.
//
// **Permission required:** review
func (s *Documents) GetDocumentOriginalFileResource(ctx context.Context, request operations.GetDocumentOriginalFileResourceRequest) (*operations.GetDocumentOriginalFileResourceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/documents/{document_id}/original_file", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDocumentOriginalFileResourceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 403:
	}

	return res, nil
}

func (s *Documents) GetDocumentPageImageResource(ctx context.Context, request operations.GetDocumentPageImageResourceRequest) (*operations.GetDocumentPageImageResourceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/documents/{document_id}/page/{page_range}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDocumentPageImageResourceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 403:
	}

	return res, nil
}

// GetDocumentResource - Get the document
// Simple endpoint that will fetch the given document
//
// **Permission required:** review
func (s *Documents) GetDocumentResource(ctx context.Context, request operations.GetDocumentResourceRequest) (*operations.GetDocumentResourceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/documents/{document_id}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateHeaders(ctx, req, request.Headers)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDocumentResourceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.DocumentModelGet
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.DocumentModelGet = out
		}
	case httpRes.StatusCode == 403:
	}

	return res, nil
}

// GetDocumentTextResource - Get the document text
// Return the optimal text for the document; will either be the OCR text, the native text,
// the raw text or a translated version.
//
// **Permission required:** review
func (s *Documents) GetDocumentTextResource(ctx context.Context, request operations.GetDocumentTextResourceRequest) (*operations.GetDocumentTextResourceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/documents/{document_id}/text", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GetDocumentTextResourceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 403:
	}

	return res, nil
}

// PostDocumentsSimpleAPIResource - Upload a new doc to the inbox
// This endpoint uploads a new file to the given inbox and will process the file.
//
// ## Upload mode: sync
//
// When sync=true (default), the call will block and wait for the processing to complete.
//
// If you have a custom output configured (this is set by Contract Fit team),
// passing mimetype *application/vnd.cf.custom* will allow you to get the custom output formatted result
//
// Since it might yield inconsistent results if a timeout is raised while waiting,
// it is recommended to use the **async** mode.
//
// ## Upload mode: async
//
// When sync=false, the call will schedule the processing and return without waiting for completion.
// It will return the document ID, so that the processed document can be retrieved at a later date.
//
// **Permission required:** upload
func (s *Documents) PostDocumentsSimpleAPIResource(ctx context.Context, request operations.PostDocumentsSimpleAPIResourceRequest) (*operations.PostDocumentsSimpleAPIResourceResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/documents/{inbox_id}", request.PathParams)

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostDocumentsSimpleAPIResourceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 403:
	case httpRes.StatusCode == 415:
	}

	return res, nil
}

// PostSimpleDocumentsResource - Upload a new document
// This endpoint is a simplified version of the upload document to inbox one - synchronous mode.
//
// The upload file will be upload to the given inbox if provided, else fallback to the **invoice** inbox.
// The file will be processed synchronously, ie the request will blocks until the document was processed
// *or* until it timeout; in this case the document might **not** be correctly processed.
//
// For a more reliable processing use the /documents/{inbox_id} endpoint in async mode
//
// **Permission required:** upload
func (s *Documents) PostSimpleDocumentsResource(ctx context.Context, request operations.PostSimpleDocumentsResourceRequest) (*operations.PostSimpleDocumentsResourceResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/documents/"

	bodyReader, reqContentType, err := utils.SerializeRequestBody(ctx, request)
	if err != nil {
		return nil, fmt.Errorf("error serializing request body: %w", err)
	}
	if bodyReader == nil {
		return nil, fmt.Errorf("request body is required")
	}

	req, err := http.NewRequestWithContext(ctx, "POST", url, bodyReader)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	req.Header.Set("Content-Type", reqContentType)

	client := s._securityClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.PostSimpleDocumentsResourceResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	case httpRes.StatusCode == 403:
	}

	return res, nil
}
