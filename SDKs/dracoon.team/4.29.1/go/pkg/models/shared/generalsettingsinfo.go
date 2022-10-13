package shared

type GeneralSettingsInfo struct {
	CryptoEnabled                  *bool  `json:"cryptoEnabled"`
	EmailNotificationButtonEnabled *bool  `json:"emailNotificationButtonEnabled"`
	EulaEnabled                    *bool  `json:"eulaEnabled"`
	HomeRoomParentID               *int64 `json:"homeRoomParentId"`
	HomeRoomsActive                *bool  `json:"homeRoomsActive"`
	MediaServerEnabled             *bool  `json:"mediaServerEnabled"`
	S3TagsEnabled                  *bool  `json:"s3TagsEnabled"`
	SharePasswordSmsEnabled        *bool  `json:"sharePasswordSmsEnabled"`
	UseS3Storage                   *bool  `json:"useS3Storage"`
	WeakPasswordEnabled            *bool  `json:"weakPasswordEnabled"`
}
