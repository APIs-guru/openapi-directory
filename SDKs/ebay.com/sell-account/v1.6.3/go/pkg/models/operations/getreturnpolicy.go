package operations

import (
	"openapi/pkg/models/shared"
)

type GetReturnPolicyPathParams struct {
	ReturnPolicyID string `pathParam:"style=simple,explode=false,name=return_policy_id"`
}

type GetReturnPolicySecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetReturnPolicyRequest struct {
	PathParams GetReturnPolicyPathParams
	Security   GetReturnPolicySecurity
}

type GetReturnPolicyResponse struct {
	ContentType  string
	ReturnPolicy *shared.ReturnPolicy
	StatusCode   int64
}
