package shared

// LfTagPolicyResource
// A structure containing a list of tag conditions that apply to a resource's tag policy.
type LfTagPolicyResource struct {
	CatalogID    *string          `json:"CatalogId,omitempty"`
	Expression   []LfTag          `json:"Expression"`
	ResourceType ResourceTypeEnum `json:"ResourceType"`
}
