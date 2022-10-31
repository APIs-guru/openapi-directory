package operations

import (
"openapi/pkg/models/shared")

type ChromeFromHTMLPostRequest struct {
    Request *shared.ChromeHTMLToPdfRequest `request:"mediaType=application/json"`
    
}

type ChromeFromHTMLPostResponse struct {
    APIResponseFailure *shared.APIResponseFailure 
    APIResponseSuccess *shared.APIResponseSuccess 
    ContentType string 
    StatusCode int64 
    
}

