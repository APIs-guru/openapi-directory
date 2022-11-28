package shared

// Version
// The body of a version resource. A version resource represents a collection of components, such as files and other data. This may correspond to a version in many package management schemes.
type Version struct {
	CreateTime  *string `json:"createTime,omitempty"`
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
	RelatedTags []Tag   `json:"relatedTags,omitempty"`
	UpdateTime  *string `json:"updateTime,omitempty"`
}
