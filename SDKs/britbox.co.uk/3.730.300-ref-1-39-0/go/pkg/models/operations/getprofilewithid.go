package operations

import (
"openapi/pkg/models/shared")

type GetProfileWithIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetProfileWithIDQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetProfileWithIDSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type GetProfileWithIDRequest struct {
    PathParams GetProfileWithIDPathParams 
    QueryParams GetProfileWithIDQueryParams 
    Security GetProfileWithIDSecurity 
    
}

type GetProfileWithIDResponse struct {
    ContentType string 
    ProfileSummary *shared.ProfileSummary 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

