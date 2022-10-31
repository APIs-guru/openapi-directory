package operations

import (
"openapi/pkg/models/shared")

type WkhtmltopdfFromURLPostRequest struct {
    Request *shared.WkHTMLToPdfURLToPdfRequest `request:"mediaType=application/json"`
    
}

type WkhtmltopdfFromURLPostResponse struct {
    APIResponseFailure *shared.APIResponseFailure 
    APIResponseSuccess *shared.APIResponseSuccess 
    ContentType string 
    StatusCode int64 
    
}

