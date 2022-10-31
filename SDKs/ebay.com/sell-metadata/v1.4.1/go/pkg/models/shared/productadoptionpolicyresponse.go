package shared

type ProductAdoptionPolicyResponse struct {
	ProductAdoptionPolicies []ProductAdoptionPolicy `json:"productAdoptionPolicies,omitempty"`
	Warnings                []Error                 `json:"warnings,omitempty"`
}
