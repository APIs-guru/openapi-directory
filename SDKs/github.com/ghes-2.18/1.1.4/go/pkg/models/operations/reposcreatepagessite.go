package operations

import (
	"openapi/pkg/models/shared"
)

type ReposCreatePagesSitePathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposCreatePagesSiteRequestBodySourceBranchEnum string

const (
	ReposCreatePagesSiteRequestBodySourceBranchEnumMaster  ReposCreatePagesSiteRequestBodySourceBranchEnum = "master"
	ReposCreatePagesSiteRequestBodySourceBranchEnumGhPages ReposCreatePagesSiteRequestBodySourceBranchEnum = "gh-pages"
)

type ReposCreatePagesSiteRequestBodySourcePathEnum string

const (
	ReposCreatePagesSiteRequestBodySourcePathEnumRoot     ReposCreatePagesSiteRequestBodySourcePathEnum = "/"
	ReposCreatePagesSiteRequestBodySourcePathEnumRootDocs ReposCreatePagesSiteRequestBodySourcePathEnum = "/docs"
)

// ReposCreatePagesSiteRequestBodySource
// The source branch and directory used to publish your Pages site.
type ReposCreatePagesSiteRequestBodySource struct {
	Branch ReposCreatePagesSiteRequestBodySourceBranchEnum `json:"branch"`
	Path   *ReposCreatePagesSiteRequestBodySourcePathEnum  `json:"path,omitempty"`
}

// ReposCreatePagesSiteRequestBody
// The source branch and directory used to publish your Pages site.
type ReposCreatePagesSiteRequestBody struct {
	Source ReposCreatePagesSiteRequestBodySource `json:"source"`
}

type ReposCreatePagesSite415ApplicationJSON struct {
	DocumentationURL string `json:"documentation_url"`
	Message          string `json:"message"`
}

type ReposCreatePagesSiteRequest struct {
	PathParams ReposCreatePagesSitePathParams
	Request    *ReposCreatePagesSiteRequestBody `request:"mediaType=application/json"`
}

type ReposCreatePagesSiteResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	BasicError                                   *shared.BasicError
	Page                                         *shared.Page
	ReposCreatePagesSite415ApplicationJSONObject *ReposCreatePagesSite415ApplicationJSON
	ValidationError                              *shared.ValidationError
}
