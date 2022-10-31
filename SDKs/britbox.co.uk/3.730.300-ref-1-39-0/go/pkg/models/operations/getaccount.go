package operations

import (
"openapi/pkg/models/shared")

type GetAccountQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetAccountSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type GetAccountRequest struct {
    QueryParams GetAccountQueryParams 
    Security GetAccountSecurity 
    
}

type GetAccountResponse struct {
    Account map[string]interface{} 
    ContentType string 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

