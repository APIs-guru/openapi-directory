package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateReturnPolicyPathParams struct {
	ReturnPolicyID string `pathParam:"style=simple,explode=false,name=return_policy_id"`
}

type UpdateReturnPolicySecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type UpdateReturnPolicyRequest struct {
	PathParams UpdateReturnPolicyPathParams
	Request    shared.ReturnPolicyRequest `request:"mediaType=application/json"`
	Security   UpdateReturnPolicySecurity
}

type UpdateReturnPolicyResponse struct {
	ContentType             string
	SetReturnPolicyResponse *shared.SetReturnPolicyResponse
	StatusCode              int64
}
