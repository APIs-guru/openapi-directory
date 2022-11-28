package shared

// Resource
//
//	Information about an instance of an AWS resource associated with a project.
type Resource struct {
	Arn        *string           `json:"arn,omitempty"`
	Attributes map[string]string `json:"attributes,omitempty"`
	Feature    *string           `json:"feature,omitempty"`
	Name       *string           `json:"name,omitempty"`
	Type       *string           `json:"type,omitempty"`
}
