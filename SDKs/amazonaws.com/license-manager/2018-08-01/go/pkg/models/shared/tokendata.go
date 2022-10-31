package shared

type TokenData struct {
	ExpirationTime  *string  `json:"ExpirationTime,omitempty"`
	LicenseArn      *string  `json:"LicenseArn,omitempty"`
	RoleArns        []string `json:"RoleArns,omitempty"`
	Status          *string  `json:"Status,omitempty"`
	TokenID         *string  `json:"TokenId,omitempty"`
	TokenProperties []string `json:"TokenProperties,omitempty"`
	TokenType       *string  `json:"TokenType,omitempty"`
}
