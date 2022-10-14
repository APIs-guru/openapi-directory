package shared

type GeneralSettings struct {
	AuthTokenRestrictions          *AuthTokenRestrictions `json:"authTokenRestrictions,omitempty"`
	CryptoEnabled                  *bool                  `json:"cryptoEnabled,omitempty"`
	EmailNotificationButtonEnabled *bool                  `json:"emailNotificationButtonEnabled,omitempty"`
	EulaEnabled                    *bool                  `json:"eulaEnabled,omitempty"`
	HideLoginInputFields           *bool                  `json:"hideLoginInputFields,omitempty"`
	MediaServerEnabled             *bool                  `json:"mediaServerEnabled,omitempty"`
	S3TagsEnabled                  *bool                  `json:"s3TagsEnabled,omitempty"`
	SharePasswordSmsEnabled        *bool                  `json:"sharePasswordSmsEnabled,omitempty"`
	UseS3Storage                   *bool                  `json:"useS3Storage,omitempty"`
	WeakPasswordEnabled            *bool                  `json:"weakPasswordEnabled,omitempty"`
}
