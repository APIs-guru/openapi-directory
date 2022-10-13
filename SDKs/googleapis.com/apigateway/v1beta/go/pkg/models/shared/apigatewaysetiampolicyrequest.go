package shared

type ApigatewaySetIamPolicyRequest struct {
	Policy     *ApigatewayPolicy `json:"policy"`
	UpdateMask *string           `json:"updateMask"`
}
