package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type ContentBlocks struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewContentBlocks(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *ContentBlocks {
	return &ContentBlocks{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ListAvailableContentBlocks - List Available Content Blocks
// This endpoint will list existing Content Block information.
//
// ### Successful Response Properties
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR_REST_API_KEY
//
//	{
//	  "count": "integer",
//	  "content_blocks": [
//	    {
//	      "content_block_id": "string",
//	      "name": "string",
//	      "content_type": "html or text",
//	      "liquid_tag": "string",
//	      "inclusion_count" : "integer",
//	      "created_at": "time-in-iso",
//	      "last_edited": "time-in-iso",
//	      "tags" : "array of strings"
//	    }
//	  ]
//	}
//
// ```
//
// ### Possible Errors
// - `Modified after time is invalid.`
// The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).
//
// - `Modified before time is invalid.`
// The date you have provided is not a valid or parsable date. Please reformat this value as a string in ISO 8601 format (`yyyy-mm-ddThh:mm:ss.ffffff`).
//
// - `Modified after time must be earlier than or the same as modified before time.`
//
// - `Content Block number limit is invalid.`
// The `limit` parameter must be an integer (positive number) greater than 0.
//
// - `Content Block number limit must be greater than 0.`
// The `limit` parameter must be an integer (positive number) greater than 0.
//
// - `Content Block number limit exceeds maximum of 1000.`
// The `limit` parameter must be an integer (positive number) greater than 0.
//
// - `Offset is invalid.`
// The `offset` parameter must be an integer (positive number) greater than 0.
//
// - `Offset must be greater than 0.`
// The `offset` parameter must be an integer (positive number) greater than 0.
func (s *ContentBlocks) ListAvailableContentBlocks(ctx context.Context, request operations.ListAvailableContentBlocksRequest) (*operations.ListAvailableContentBlocksResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/content_blocks/list"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.ListAvailableContentBlocksResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// SeeContentBlockInformation - See Content Block Information
// This endpoint will call information for an existing Content Block.
//
// ### Successful Response Properties
// ```json
// Content-Type: application/json
// Authorization: Bearer YOUR_REST_API_KEY
//
//	{
//	  "content_block_id": "string",
//	  "name": "string",
//	  "content": "string",
//	  "description": "string",
//	  "content_type": "html or text",
//	  "tags":  "array of strings",
//	  "created_at": "time-in-iso",
//	  "last_edited": "time-in-iso",
//	  "inclusion_count" : "integer",
//	  "message": "success"
//	}
//
// ```
//
// ### Possible Errors
// - `Content Block ID cannot be blank.` - A Content Block has not been listed or is not encapsulated in quotes.
//
// - `Content Block ID is invalid for this App Group.` - This Content Block does not exist or is in a different company account or app group.
//
// - `Content Block has been deleted - content not available.` - This Content Block, though it may have existed earlier, has been deleted.
//
// - `Include Inclusion Data - error` - One of true or false is not provided.
func (s *ContentBlocks) SeeContentBlockInformation(ctx context.Context, request operations.SeeContentBlockInformationRequest) (*operations.SeeContentBlockInformationResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/content_blocks/info"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	utils.PopulateQueryParams(ctx, req, request.QueryParams)

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.SeeContentBlockInformationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
