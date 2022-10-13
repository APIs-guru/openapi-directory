package shared

type UpdateServiceTemplateInput struct {
	Description *string `json:"description"`
	DisplayName *string `json:"displayName"`
	Name        string  `json:"name"`
}
