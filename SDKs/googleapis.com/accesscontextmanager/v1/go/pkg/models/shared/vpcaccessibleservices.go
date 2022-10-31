package shared

type VpcAccessibleServices struct {
	AllowedServices   []string `json:"allowedServices,omitempty"`
	EnableRestriction *bool    `json:"enableRestriction,omitempty"`
}
