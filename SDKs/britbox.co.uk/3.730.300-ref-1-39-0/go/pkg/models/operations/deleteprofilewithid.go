package operations

import (
"openapi/pkg/models/shared")

type DeleteProfileWithIDPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteProfileWithIDQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type DeleteProfileWithIDSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type DeleteProfileWithIDRequest struct {
    PathParams DeleteProfileWithIDPathParams 
    QueryParams DeleteProfileWithIDQueryParams 
    Security DeleteProfileWithIDSecurity 
    
}

type DeleteProfileWithIDResponse struct {
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

