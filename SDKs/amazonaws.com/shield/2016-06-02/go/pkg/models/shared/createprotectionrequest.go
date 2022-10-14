package shared

type CreateProtectionRequest struct {
	Name        string `json:"Name"`
	ResourceArn string `json:"ResourceArn"`
	Tags        []Tag  `json:"Tags,omitempty"`
}
