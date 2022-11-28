package shared

// ProductAdoptionPolicyResponse
// This is the response object returned by a call to getProductAdoptionPolicies.
type ProductAdoptionPolicyResponse struct {
	ProductAdoptionPolicies []ProductAdoptionPolicy `json:"productAdoptionPolicies,omitempty"`
	Warnings                []Error                 `json:"warnings,omitempty"`
}
