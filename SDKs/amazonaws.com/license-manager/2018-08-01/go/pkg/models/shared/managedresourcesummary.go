package shared

type ManagedResourceSummary struct {
	AssociationCount *int64            `json:"AssociationCount,omitempty"`
	ResourceType     *ResourceTypeEnum `json:"ResourceType,omitempty"`
}
