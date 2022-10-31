package operations

import (
"openapi/pkg/models/shared")

type GetPaymentMethodsQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetPaymentMethodsSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type GetPaymentMethodsRequest struct {
    QueryParams GetPaymentMethodsQueryParams 
    Security GetPaymentMethodsSecurity 
    
}

type GetPaymentMethodsResponse struct {
    ContentType string 
    PaymentMethods []shared.PaymentMethod 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

