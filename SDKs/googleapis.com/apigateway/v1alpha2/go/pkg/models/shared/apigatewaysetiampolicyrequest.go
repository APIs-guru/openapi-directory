package shared



type ApigatewaySetIamPolicyRequest struct {
    Policy *ApigatewayPolicy `json:"policy,omitempty"`
    UpdateMask *string `json:"updateMask,omitempty"`
    
}

