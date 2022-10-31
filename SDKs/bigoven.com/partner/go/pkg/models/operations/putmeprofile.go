package operations

import (
"openapi/pkg/models/shared")

type PutMeProfileRequests struct {
    Api2ModelsProfile *shared.Api2ModelsProfile `request:"mediaType=application/json"`
    Api2ModelsProfile1 *shared.Api2ModelsProfile `request:"mediaType=application/x-www-form-urlencoded"`
    Api2ModelsProfile2 *shared.Api2ModelsProfile `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type PutMeProfileRequest struct {
    Request PutMeProfileRequests 
    
}

type PutMeProfileResponse struct {
    Api2ModelsBigOvenUser *shared.Api2ModelsBigOvenUser 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

