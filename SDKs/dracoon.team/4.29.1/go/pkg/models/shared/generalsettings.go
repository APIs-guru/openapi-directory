package shared

type GeneralSettings struct {
	AuthTokenRestrictions          *AuthTokenRestrictions `json:"authTokenRestrictions"`
	CryptoEnabled                  *bool                  `json:"cryptoEnabled"`
	EmailNotificationButtonEnabled *bool                  `json:"emailNotificationButtonEnabled"`
	EulaEnabled                    *bool                  `json:"eulaEnabled"`
	HideLoginInputFields           *bool                  `json:"hideLoginInputFields"`
	MediaServerEnabled             *bool                  `json:"mediaServerEnabled"`
	S3TagsEnabled                  *bool                  `json:"s3TagsEnabled"`
	SharePasswordSmsEnabled        *bool                  `json:"sharePasswordSmsEnabled"`
	UseS3Storage                   *bool                  `json:"useS3Storage"`
	WeakPasswordEnabled            *bool                  `json:"weakPasswordEnabled"`
}
