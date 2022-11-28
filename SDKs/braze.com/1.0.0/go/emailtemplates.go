package sdk

import (
	"context"
	"fmt"
	"net/http"
	"openapi/internal/utils"
	"openapi/pkg/models/operations"
	"strings"
)

type EmailTemplates struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewEmailTemplates(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *EmailTemplates {
	return &EmailTemplates{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// ListAvailableEmailTemplates - List Available Email Templates
// Use this endpoint to get a list of available templates in your Braze account.
//
// Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.
//
// ### Successful Response Properties
// ```json
//
//	{
//	  "count": number of templates returned
//	  "templates": [template with the following properties]:
//	    "email_template_id": (string) your email template's API Identifier,
//	    "template_name": (string) the name of your email template,
//	    "created_at": (string, in ISO 8601),
//	    "updated_at": (string, in ISO 8601),
//	    "tags": (array of strings) tags appended to the template
//	}
//
//	```
func (s *EmailTemplates) ListAvailableEmailTemplates(ctx context.Context, request operations.ListAvailableEmailTemplatesRequest) (*operations.ListAvailableEmailTemplatesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/templates/email/list"

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

	res := &operations.ListAvailableEmailTemplatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}

// SeeEmailTemplateInformation - See Email Template Information
// Use to get information on your email templates.
//
// Use the Template REST APIs to programmatically manage the email templates that you have stored on the Braze dashboard, on the Templates & Media page. Braze provides two endpoints for creating and updating your email templates.
//
// ### Request Components
// - [Template Identifier](https://www.braze.com/docs/api/identifier_types/)
func (s *EmailTemplates) SeeEmailTemplateInformation(ctx context.Context, request operations.SeeEmailTemplateInformationRequest) (*operations.SeeEmailTemplateInformationResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/templates/email/info"

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

	res := &operations.SeeEmailTemplateInformationResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
	}

	return res, nil
}
