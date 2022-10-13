package shared

type AutomotivePartsCompatibilityPolicyResponse struct {
	AutomotivePartsCompatibilityPolicies []AutomotivePartsCompatibilityPolicy `json:"automotivePartsCompatibilityPolicies"`
	Warnings                             []Error                              `json:"warnings"`
}
