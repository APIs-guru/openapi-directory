package operations

import (
"openapi/pkg/models/shared")

type GetPaymentPolicyByNameQueryParams struct {
    MarketplaceID string `queryParam:"style=form,explode=true,name=marketplace_id"`
    Name string `queryParam:"style=form,explode=true,name=name"`
    
}

type GetPaymentPolicyByNameSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetPaymentPolicyByNameRequest struct {
    QueryParams GetPaymentPolicyByNameQueryParams 
    Security GetPaymentPolicyByNameSecurity 
    
}

type GetPaymentPolicyByNameResponse struct {
    ContentType string 
    PaymentPolicy *shared.PaymentPolicy 
    StatusCode int64 
    
}

