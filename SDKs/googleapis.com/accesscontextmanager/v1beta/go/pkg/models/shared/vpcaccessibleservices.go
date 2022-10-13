package shared

type VpcAccessibleServices struct {
	AllowedServices   []string `json:"allowedServices"`
	EnableRestriction *bool    `json:"enableRestriction"`
}
