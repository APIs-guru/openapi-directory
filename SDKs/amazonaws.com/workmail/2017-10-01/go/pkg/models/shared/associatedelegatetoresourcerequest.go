package shared

type AssociateDelegateToResourceRequest struct {
	EntityID       string `json:"EntityId"`
	OrganizationID string `json:"OrganizationId"`
	ResourceID     string `json:"ResourceId"`
}
