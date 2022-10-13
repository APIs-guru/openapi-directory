package operations

import (
	"openapi/pkg/models/shared"
)

type CreateReturnPolicySecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type CreateReturnPolicyRequest struct {
	Request  shared.ReturnPolicyRequest `request:"mediaType=application/json"`
	Security CreateReturnPolicySecurity
}

type CreateReturnPolicyResponse struct {
	ContentType             string
	Headers                 map[string][]string
	SetReturnPolicyResponse *shared.SetReturnPolicyResponse
	StatusCode              int64
}
