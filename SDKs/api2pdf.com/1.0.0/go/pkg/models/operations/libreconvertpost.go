package operations

import (
"openapi/pkg/models/shared")

type LibreConvertPostRequest struct {
    Request *shared.LibreOfficeConvertRequest `request:"mediaType=application/json"`
    
}

type LibreConvertPostResponse struct {
    APIResponseFailure *shared.APIResponseFailure 
    APIResponseSuccess *shared.APIResponseSuccess 
    ContentType string 
    StatusCode int64 
    
}

