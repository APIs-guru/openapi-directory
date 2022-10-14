package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreatePagesSitePathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposCreatePagesSiteRequestBodySourcePathEnum string

const (
	ReposCreatePagesSiteRequestBodySourcePathEnumRoot     ReposCreatePagesSiteRequestBodySourcePathEnum = "/"
	ReposCreatePagesSiteRequestBodySourcePathEnumRootDocs ReposCreatePagesSiteRequestBodySourcePathEnum = "/docs"
)

type ReposCreatePagesSiteRequestBodySource struct {
	Branch string                                         `json:"branch"`
	Path   *ReposCreatePagesSiteRequestBodySourcePathEnum `json:"path,omitempty"`
}

type ReposCreatePagesSiteRequestBody struct {
	Source ReposCreatePagesSiteRequestBodySource `json:"source"`
}

type ReposCreatePagesSiteRequest struct {
	PathParams ReposCreatePagesSitePathParams
	Request    *ReposCreatePagesSiteRequestBody `request:"mediaType=application/json"`
}

type ReposCreatePagesSite415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ReposCreatePagesSiteResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	BasicError                                   *shared.BasicError
	Page                                         *shared.Page
	ReposCreatePagesSite415ApplicationJSONObject *ReposCreatePagesSite415ApplicationJSON
	ValidationError                              *shared.ValidationError
}
