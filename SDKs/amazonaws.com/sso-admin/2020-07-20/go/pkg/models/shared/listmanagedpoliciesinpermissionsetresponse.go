package shared

type ListManagedPoliciesInPermissionSetResponse struct {
	AttachedManagedPolicies []AttachedManagedPolicy `json:"AttachedManagedPolicies"`
	NextToken               *string                 `json:"NextToken"`
}
