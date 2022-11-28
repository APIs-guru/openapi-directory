package shared

// ResourceTagMapping
// A list of resource ARNs and the tags (keys and values) that are associated with each.
type ResourceTagMapping struct {
	ComplianceDetails *ComplianceDetails `json:"ComplianceDetails,omitempty"`
	ResourceArn       *string            `json:"ResourceARN,omitempty"`
	Tags              []Tag              `json:"Tags,omitempty"`
}
