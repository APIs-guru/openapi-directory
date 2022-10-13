package shared

type ProductAdoptionPolicyResponse struct {
	ProductAdoptionPolicies []ProductAdoptionPolicy `json:"productAdoptionPolicies"`
	Warnings                []Error                 `json:"warnings"`
}
