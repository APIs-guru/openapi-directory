package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteReturnPolicyPathParams struct {
	ReturnPolicyID string `pathParam:"style=simple,explode=false,name=return_policy_id"`
}

type DeleteReturnPolicySecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type DeleteReturnPolicyRequest struct {
	PathParams DeleteReturnPolicyPathParams
	Security   DeleteReturnPolicySecurity
}

type DeleteReturnPolicyResponse struct {
	ContentType string
	StatusCode  int64
}
