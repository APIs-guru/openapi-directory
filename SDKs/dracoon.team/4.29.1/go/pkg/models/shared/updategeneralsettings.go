package shared

type UpdateGeneralSettings struct {
	AuthTokenRestrictions          *UpdateAuthTokenRestrictions `json:"authTokenRestrictions"`
	CryptoEnabled                  *bool                        `json:"cryptoEnabled"`
	EmailNotificationButtonEnabled *bool                        `json:"emailNotificationButtonEnabled"`
	EulaEnabled                    *bool                        `json:"eulaEnabled"`
	HideLoginInputFields           *bool                        `json:"hideLoginInputFields"`
	MediaServerEnabled             *bool                        `json:"mediaServerEnabled"`
	S3TagsEnabled                  *bool                        `json:"s3TagsEnabled"`
	SharePasswordSmsEnabled        *bool                        `json:"sharePasswordSmsEnabled"`
	WeakPasswordEnabled            *bool                        `json:"weakPasswordEnabled"`
}
