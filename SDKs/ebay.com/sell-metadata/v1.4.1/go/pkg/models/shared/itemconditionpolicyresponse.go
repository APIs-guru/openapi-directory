package shared



type ItemConditionPolicyResponse struct {
    ItemConditionPolicies []ItemConditionPolicy `json:"itemConditionPolicies,omitempty"`
    Warnings []Error `json:"warnings,omitempty"`
    
}

