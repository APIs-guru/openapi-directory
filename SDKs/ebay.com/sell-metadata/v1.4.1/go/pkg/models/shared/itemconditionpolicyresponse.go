package shared

type ItemConditionPolicyResponse struct {
	ItemConditionPolicies []ItemConditionPolicy `json:"itemConditionPolicies"`
	Warnings              []Error               `json:"warnings"`
}
