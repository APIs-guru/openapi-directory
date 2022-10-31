package operations

import (
"openapi/pkg/models/shared")

type GistsCreateCommentPathParams struct {
    GistID string `pathParam:"style=simple,explode=false,name=gist_id"`
    
}

type GistsCreateCommentRequestBody struct {
    Body string `json:"body"`
    
}

type GistsCreateCommentRequest struct {
    PathParams GistsCreateCommentPathParams 
    Request *GistsCreateCommentRequestBody `request:"mediaType=application/json"`
    
}

type GistsCreateCommentResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    GistComment *shared.GistComment 
    
}

