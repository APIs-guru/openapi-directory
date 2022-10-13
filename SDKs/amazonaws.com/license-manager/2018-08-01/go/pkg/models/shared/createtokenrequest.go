package shared

type CreateTokenRequest struct {
	ClientToken      string   `json:"ClientToken"`
	ExpirationInDays *int64   `json:"ExpirationInDays"`
	LicenseArn       string   `json:"LicenseArn"`
	RoleArns         []string `json:"RoleArns"`
	TokenProperties  []string `json:"TokenProperties"`
}
