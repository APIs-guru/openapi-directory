package shared

type ManagedResourceSummary struct {
	AssociationCount *int64            `json:"AssociationCount"`
	ResourceType     *ResourceTypeEnum `json:"ResourceType"`
}
