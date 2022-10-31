package operations

import (
"openapi/pkg/models/shared")

type ChecksCreateSuitePathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ChecksCreateSuiteRequestBody struct {
    HeadSha string `json:"head_sha"`
    
}

type ChecksCreateSuiteRequest struct {
    PathParams ChecksCreateSuitePathParams 
    Request *ChecksCreateSuiteRequestBody `request:"mediaType=application/json"`
    
}

type ChecksCreateSuiteResponse struct {
    ContentType string 
    StatusCode int64 
    CheckSuite *shared.CheckSuite 
    
}

