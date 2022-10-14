package shared

type ListManagedPoliciesInPermissionSetResponse struct {
	AttachedManagedPolicies []AttachedManagedPolicy `json:"AttachedManagedPolicies,omitempty"`
	NextToken               *string                 `json:"NextToken,omitempty"`
}
