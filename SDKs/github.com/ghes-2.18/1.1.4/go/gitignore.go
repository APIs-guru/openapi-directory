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

type Gitignore struct {
	_defaultClient  HTTPClient
	_securityClient HTTPClient
	_serverURL      string
	_language       string
	_sdkVersion     string
	_genVersion     string
}

func NewGitignore(defaultClient, securityClient HTTPClient, serverURL, language, sdkVersion, genVersion string) *Gitignore {
	return &Gitignore{
		_defaultClient:  defaultClient,
		_securityClient: securityClient,
		_serverURL:      serverURL,
		_language:       language,
		_sdkVersion:     sdkVersion,
		_genVersion:     genVersion,
	}
}

// GitignoreGetAllTemplates - Get all gitignore templates
// List all templates available to pass as an option when [creating a repository](https://docs.github.com/enterprise-server@2.18/rest/reference/repos#create-a-repository-for-the-authenticated-user).
// https://docs.github.com/enterprise-server@2.18/rest/reference/gitignore#get-all-gitignore-templates - API method documentation
func (s *Gitignore) GitignoreGetAllTemplates(ctx context.Context) (*operations.GitignoreGetAllTemplatesResponse, error) {
	baseURL := s._serverURL
	url := strings.TrimSuffix(baseURL, "/") + "/gitignore/templates"

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GitignoreGetAllTemplatesResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out []string
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GitignoreGetAllTemplates200ApplicationJSONStrings = out
		}
	case httpRes.StatusCode == 304:
	}

	return res, nil
}

// GitignoreGetTemplate - Get a gitignore template
// The API also allows fetching the source of a single template.
// Use the raw [media type](https://docs.github.com/enterprise-server@2.18/rest/overview/media-types/) to get the raw contents.
// https://docs.github.com/enterprise-server@2.18/rest/reference/gitignore#get-a-gitignore-template - API method documentation
func (s *Gitignore) GitignoreGetTemplate(ctx context.Context, request operations.GitignoreGetTemplateRequest) (*operations.GitignoreGetTemplateResponse, error) {
	baseURL := s._serverURL
	url := utils.GenerateURL(ctx, baseURL, "/gitignore/templates/{name}", request.PathParams)

	req, err := http.NewRequestWithContext(ctx, "GET", url, nil)
	if err != nil {
		return nil, fmt.Errorf("error creating request: %w", err)
	}

	client := s._defaultClient

	httpRes, err := client.Do(req)
	if err != nil {
		return nil, fmt.Errorf("error sending request: %w", err)
	}
	defer httpRes.Body.Close()

	contentType := httpRes.Header.Get("Content-Type")

	res := &operations.GitignoreGetTemplateResponse{
		StatusCode:  int64(httpRes.StatusCode),
		ContentType: contentType,
	}
	switch {
	case httpRes.StatusCode == 200:
		switch {
		case utils.MatchContentType(contentType, `application/json`):
			var out *shared.GitignoreTemplate
			if err := utils.UnmarshalJsonFromResponseBody(httpRes.Body, &out); err != nil {
				return nil, err
			}

			res.GitignoreTemplate = out
		}
	case httpRes.StatusCode == 304:
	}

	return res, nil
}
