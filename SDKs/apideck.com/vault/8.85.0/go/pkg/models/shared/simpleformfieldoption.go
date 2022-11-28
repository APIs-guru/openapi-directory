package shared

type SimpleFormFieldOption struct {
	Label *string      `json:"label,omitempty"`
	Value *interface{} `json:"value,omitempty"`
}
