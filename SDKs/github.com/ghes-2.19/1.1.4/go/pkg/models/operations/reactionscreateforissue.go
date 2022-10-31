package operations

import (
"openapi/pkg/models/shared")

type ReactionsCreateForIssuePathParams struct {
    IssueNumber int64 `pathParam:"style=simple,explode=false,name=issue_number"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}


type ReactionsCreateForIssueRequestBodyContentEnum string

const (
    ReactionsCreateForIssueRequestBodyContentEnumPlus1 ReactionsCreateForIssueRequestBodyContentEnum = "+1"
ReactionsCreateForIssueRequestBodyContentEnumMinus1 ReactionsCreateForIssueRequestBodyContentEnum = "-1"
ReactionsCreateForIssueRequestBodyContentEnumLaugh ReactionsCreateForIssueRequestBodyContentEnum = "laugh"
ReactionsCreateForIssueRequestBodyContentEnumConfused ReactionsCreateForIssueRequestBodyContentEnum = "confused"
ReactionsCreateForIssueRequestBodyContentEnumHeart ReactionsCreateForIssueRequestBodyContentEnum = "heart"
ReactionsCreateForIssueRequestBodyContentEnumHooray ReactionsCreateForIssueRequestBodyContentEnum = "hooray"
ReactionsCreateForIssueRequestBodyContentEnumRocket ReactionsCreateForIssueRequestBodyContentEnum = "rocket"
ReactionsCreateForIssueRequestBodyContentEnumEyes ReactionsCreateForIssueRequestBodyContentEnum = "eyes"
)


type ReactionsCreateForIssueRequestBody struct {
    Content ReactionsCreateForIssueRequestBodyContentEnum `json:"content"`
    
}

type ReactionsCreateForIssueRequest struct {
    PathParams ReactionsCreateForIssuePathParams 
    Request *ReactionsCreateForIssueRequestBody `request:"mediaType=application/json"`
    
}

type ReactionsCreateForIssue415ApplicationJSON struct {
    DocumentationURL string `json:"documentation_url"`
    Message string `json:"message"`
    
}

type ReactionsCreateForIssueResponse struct {
    ContentType string 
    StatusCode int64 
    Reaction *shared.Reaction 
    ReactionsCreateForIssue415ApplicationJSONObject *ReactionsCreateForIssue415ApplicationJSON 
    ValidationError *shared.ValidationError 
    
}

