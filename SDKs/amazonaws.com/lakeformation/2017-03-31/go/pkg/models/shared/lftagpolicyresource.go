package shared

type LfTagPolicyResource struct {
	CatalogID    *string          `json:"CatalogId,omitempty"`
	Expression   []LfTag          `json:"Expression"`
	ResourceType ResourceTypeEnum `json:"ResourceType"`
}
