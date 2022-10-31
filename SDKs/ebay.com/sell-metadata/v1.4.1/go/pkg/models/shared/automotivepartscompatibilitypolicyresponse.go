package shared



type AutomotivePartsCompatibilityPolicyResponse struct {
    AutomotivePartsCompatibilityPolicies []AutomotivePartsCompatibilityPolicy `json:"automotivePartsCompatibilityPolicies,omitempty"`
    Warnings []Error `json:"warnings,omitempty"`
    
}

