package operations

import (
"openapi/pkg/models/shared")

type UpdatePaymentIntentStrongPathParams struct {
    Platform string `pathParam:"style=simple,explode=false,name=platform"`
    
}

type UpdatePaymentIntentStrongQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type UpdatePaymentIntentStrongSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type UpdatePaymentIntentStrongRequest struct {
    PathParams UpdatePaymentIntentStrongPathParams 
    QueryParams UpdatePaymentIntentStrongQueryParams 
    Request shared.ItvUpdateIntentStrongRequest `request:"mediaType=application/json"`
    Security UpdatePaymentIntentStrongSecurity 
    
}

type UpdatePaymentIntentStrongResponse struct {
    ContentType string 
    ItvUpdateIntentStrongResponse *shared.ItvUpdateIntentStrongResponse 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

