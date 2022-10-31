package operations

import (
"openapi/pkg/models/shared")

type GetSellerStandardsProfilePathParams struct {
    Cycle string `pathParam:"style=simple,explode=false,name=cycle"`
    Program string `pathParam:"style=simple,explode=false,name=program"`
    
}

type GetSellerStandardsProfileSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetSellerStandardsProfileRequest struct {
    PathParams GetSellerStandardsProfilePathParams 
    Security GetSellerStandardsProfileSecurity 
    
}

type GetSellerStandardsProfileResponse struct {
    ContentType string 
    StandardsProfile *shared.StandardsProfile 
    StatusCode int64 
    
}

