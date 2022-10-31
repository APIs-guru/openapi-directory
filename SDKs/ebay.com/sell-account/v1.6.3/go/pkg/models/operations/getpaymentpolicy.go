package operations

import (
"openapi/pkg/models/shared")

type GetPaymentPolicyPathParams struct {
    PaymentPolicyID string `pathParam:"style=simple,explode=false,name=payment_policy_id"`
    
}

type GetPaymentPolicySecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetPaymentPolicyRequest struct {
    PathParams GetPaymentPolicyPathParams 
    Security GetPaymentPolicySecurity 
    
}

type GetPaymentPolicyResponse struct {
    ContentType string 
    PaymentPolicy *shared.PaymentPolicy 
    StatusCode int64 
    
}

