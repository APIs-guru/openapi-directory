package shared



type GeneralSettingsInfo struct {
    CryptoEnabled *bool `json:"cryptoEnabled,omitempty"`
    EmailNotificationButtonEnabled *bool `json:"emailNotificationButtonEnabled,omitempty"`
    EulaEnabled *bool `json:"eulaEnabled,omitempty"`
    HomeRoomParentID *int64 `json:"homeRoomParentId,omitempty"`
    HomeRoomsActive *bool `json:"homeRoomsActive,omitempty"`
    MediaServerEnabled *bool `json:"mediaServerEnabled,omitempty"`
    S3TagsEnabled *bool `json:"s3TagsEnabled,omitempty"`
    SharePasswordSmsEnabled *bool `json:"sharePasswordSmsEnabled,omitempty"`
    UseS3Storage *bool `json:"useS3Storage,omitempty"`
    WeakPasswordEnabled *bool `json:"weakPasswordEnabled,omitempty"`
    
}

