package shared

// ManagedResourceSummary
// Summary information about a managed resource.
type ManagedResourceSummary struct {
	AssociationCount *int64            `json:"AssociationCount,omitempty"`
	ResourceType     *ResourceTypeEnum `json:"ResourceType,omitempty"`
}
