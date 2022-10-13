package shared

type TokenData struct {
	ExpirationTime  *string  `json:"ExpirationTime"`
	LicenseArn      *string  `json:"LicenseArn"`
	RoleArns        []string `json:"RoleArns"`
	Status          *string  `json:"Status"`
	TokenID         *string  `json:"TokenId"`
	TokenProperties []string `json:"TokenProperties"`
	TokenType       *string  `json:"TokenType"`
}
