package operations

import (
"openapi/pkg/models/shared")

type FindSellerStandardsProfilesSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type FindSellerStandardsProfilesRequest struct {
    Security FindSellerStandardsProfilesSecurity 
    
}

type FindSellerStandardsProfilesResponse struct {
    ContentType string 
    FindSellerStandardsProfilesResponse *shared.FindSellerStandardsProfilesResponse 
    StatusCode int64 
    
}

