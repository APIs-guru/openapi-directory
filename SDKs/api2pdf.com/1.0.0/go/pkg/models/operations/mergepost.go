package operations

import (
"openapi/pkg/models/shared")

type MergePostRequest struct {
    Request *shared.MergeRequest `request:"mediaType=application/json"`
    
}

type MergePostResponse struct {
    APIResponseFailure *shared.APIResponseFailure 
    APIResponseSuccess *shared.APIResponseSuccess 
    ContentType string 
    StatusCode int64 
    
}

