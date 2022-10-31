package operations

import (
"openapi/pkg/models/shared")

type GetPaymentMethodPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetPaymentMethodQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type GetPaymentMethodSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type GetPaymentMethodRequest struct {
    PathParams GetPaymentMethodPathParams 
    QueryParams GetPaymentMethodQueryParams 
    Security GetPaymentMethodSecurity 
    
}

type GetPaymentMethodResponse struct {
    ContentType string 
    PaymentMethod *shared.PaymentMethod 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

