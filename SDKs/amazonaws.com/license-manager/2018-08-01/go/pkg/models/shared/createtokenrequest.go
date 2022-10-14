package shared

type CreateTokenRequest struct {
	ClientToken      string   `json:"ClientToken"`
	ExpirationInDays *int64   `json:"ExpirationInDays,omitempty"`
	LicenseArn       string   `json:"LicenseArn"`
	RoleArns         []string `json:"RoleArns,omitempty"`
	TokenProperties  []string `json:"TokenProperties,omitempty"`
}
