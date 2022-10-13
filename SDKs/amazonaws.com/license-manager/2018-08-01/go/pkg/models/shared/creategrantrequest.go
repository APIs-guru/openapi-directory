package shared

type CreateGrantRequest struct {
	AllowedOperations []AllowedOperationEnum `json:"AllowedOperations"`
	ClientToken       string                 `json:"ClientToken"`
	GrantName         string                 `json:"GrantName"`
	HomeRegion        string                 `json:"HomeRegion"`
	LicenseArn        string                 `json:"LicenseArn"`
	Principals        []string               `json:"Principals"`
}
