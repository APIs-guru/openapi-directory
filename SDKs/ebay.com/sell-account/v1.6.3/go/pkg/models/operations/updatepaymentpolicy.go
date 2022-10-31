package operations

import (
"openapi/pkg/models/shared")

type UpdatePaymentPolicyPathParams struct {
    PaymentPolicyID string `pathParam:"style=simple,explode=false,name=payment_policy_id"`
    
}

type UpdatePaymentPolicySecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type UpdatePaymentPolicyRequest struct {
    PathParams UpdatePaymentPolicyPathParams 
    Request shared.PaymentPolicyRequest `request:"mediaType=application/json"`
    Security UpdatePaymentPolicySecurity 
    
}

type UpdatePaymentPolicyResponse struct {
    ContentType string 
    SetPaymentPolicyResponse *shared.SetPaymentPolicyResponse 
    StatusCode int64 
    
}

