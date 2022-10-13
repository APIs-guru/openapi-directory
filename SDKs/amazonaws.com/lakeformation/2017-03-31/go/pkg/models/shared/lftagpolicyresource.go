package shared

type LfTagPolicyResource struct {
	CatalogID    *string          `json:"CatalogId"`
	Expression   []LfTag          `json:"Expression"`
	ResourceType ResourceTypeEnum `json:"ResourceType"`
}
