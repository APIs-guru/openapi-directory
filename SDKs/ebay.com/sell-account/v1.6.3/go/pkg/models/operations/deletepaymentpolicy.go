package operations

import (
"openapi/pkg/models/shared")

type DeletePaymentPolicyPathParams struct {
    PaymentPolicyID string `pathParam:"style=simple,explode=false,name=payment_policy_id"`
    
}

type DeletePaymentPolicySecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type DeletePaymentPolicyRequest struct {
    PathParams DeletePaymentPolicyPathParams 
    Security DeletePaymentPolicySecurity 
    
}

type DeletePaymentPolicyResponse struct {
    ContentType string 
    StatusCode int64 
    
}

