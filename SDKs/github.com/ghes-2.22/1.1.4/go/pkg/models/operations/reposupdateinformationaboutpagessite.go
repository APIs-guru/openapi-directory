package operations

import (
"openapi/pkg/models/shared")

type ReposUpdateInformationAboutPagesSitePathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}


type ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum string

const (
    ReposUpdateInformationAboutPagesSiteRequestBodySource1EnumGhPages ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum = "gh-pages"
ReposUpdateInformationAboutPagesSiteRequestBodySource1EnumMaster ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum = "master"
ReposUpdateInformationAboutPagesSiteRequestBodySource1EnumMasterDocs ReposUpdateInformationAboutPagesSiteRequestBodySource1Enum = "master /docs"
)



type ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum string

const (
    ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnumRoot ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum = "/"
ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnumRootDocs ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum = "/docs"
)


type ReposUpdateInformationAboutPagesSiteRequestBodySource2 struct {
    Branch string `json:"branch"`
    Path ReposUpdateInformationAboutPagesSiteRequestBodySource2PathEnum `json:"path"`
    
}

type ReposUpdateInformationAboutPagesSiteRequestBody struct {
    Cname *string `json:"cname,omitempty"`
    HTTPSEnforced *bool `json:"https_enforced,omitempty"`
    Public *bool `json:"public,omitempty"`
    Source *interface{} `json:"source,omitempty"`
    
}

type ReposUpdateInformationAboutPagesSiteRequest struct {
    PathParams ReposUpdateInformationAboutPagesSitePathParams 
    Request *ReposUpdateInformationAboutPagesSiteRequestBody `request:"mediaType=application/json"`
    
}

type ReposUpdateInformationAboutPagesSiteResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    ScimError *shared.ScimError 
    ValidationError *shared.ValidationError 
    
}

