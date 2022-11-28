package shared

// TagOptionDetail
// Information about a TagOption.
type TagOptionDetail struct {
	Active *bool   `json:"Active,omitempty"`
	ID     *string `json:"Id,omitempty"`
	Key    *string `json:"Key,omitempty"`
	Owner  *string `json:"Owner,omitempty"`
	Value  *string `json:"Value,omitempty"`
}
