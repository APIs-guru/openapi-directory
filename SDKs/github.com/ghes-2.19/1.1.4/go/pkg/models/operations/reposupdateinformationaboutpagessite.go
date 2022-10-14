package operations

import (
	"openapi/pkg/models/shared"
)

type ReposUpdateInformationAboutPagesSitePathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposUpdateInformationAboutPagesSiteRequestBodySourceEnum string

const (
	ReposUpdateInformationAboutPagesSiteRequestBodySourceEnumGhPages    ReposUpdateInformationAboutPagesSiteRequestBodySourceEnum = "gh-pages"
	ReposUpdateInformationAboutPagesSiteRequestBodySourceEnumMaster     ReposUpdateInformationAboutPagesSiteRequestBodySourceEnum = "master"
	ReposUpdateInformationAboutPagesSiteRequestBodySourceEnumMasterDocs ReposUpdateInformationAboutPagesSiteRequestBodySourceEnum = "master /docs"
)

type ReposUpdateInformationAboutPagesSiteRequestBody struct {
	HTTPSEnforced *bool                                                      `json:"https_enforced,omitempty"`
	Public        *bool                                                      `json:"public,omitempty"`
	Source        *ReposUpdateInformationAboutPagesSiteRequestBodySourceEnum `json:"source,omitempty"`
}

type ReposUpdateInformationAboutPagesSiteRequest struct {
	PathParams ReposUpdateInformationAboutPagesSitePathParams
	Request    *ReposUpdateInformationAboutPagesSiteRequestBody `request:"mediaType=application/json"`
}

type ReposUpdateInformationAboutPagesSiteResponse struct {
	ContentType     string
	StatusCode      int64
	BasicError      *shared.BasicError
	ScimError       *shared.ScimError
	ValidationError *shared.ValidationError
}
