package shared

type UpdateGeneralSettings struct {
	AuthTokenRestrictions          *UpdateAuthTokenRestrictions `json:"authTokenRestrictions,omitempty"`
	CryptoEnabled                  *bool                        `json:"cryptoEnabled,omitempty"`
	EmailNotificationButtonEnabled *bool                        `json:"emailNotificationButtonEnabled,omitempty"`
	EulaEnabled                    *bool                        `json:"eulaEnabled,omitempty"`
	HideLoginInputFields           *bool                        `json:"hideLoginInputFields,omitempty"`
	MediaServerEnabled             *bool                        `json:"mediaServerEnabled,omitempty"`
	S3TagsEnabled                  *bool                        `json:"s3TagsEnabled,omitempty"`
	SharePasswordSmsEnabled        *bool                        `json:"sharePasswordSmsEnabled,omitempty"`
	WeakPasswordEnabled            *bool                        `json:"weakPasswordEnabled,omitempty"`
}
