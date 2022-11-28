package shared

// ApigatewaySetIamPolicyRequest
// Request message for `SetIamPolicy` method.
type ApigatewaySetIamPolicyRequest struct {
	Policy     *ApigatewayPolicy `json:"policy,omitempty"`
	UpdateMask *string           `json:"updateMask,omitempty"`
}
