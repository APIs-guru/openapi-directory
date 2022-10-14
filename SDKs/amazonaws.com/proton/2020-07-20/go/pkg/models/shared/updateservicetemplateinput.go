package shared

type UpdateServiceTemplateInput struct {
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
	Name        string  `json:"name"`
}
