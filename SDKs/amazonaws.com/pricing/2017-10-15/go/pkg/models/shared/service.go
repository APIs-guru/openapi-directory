package shared

type Service struct {
	AttributeNames []string `json:"AttributeNames,omitempty"`
	ServiceCode    *string  `json:"ServiceCode,omitempty"`
}
