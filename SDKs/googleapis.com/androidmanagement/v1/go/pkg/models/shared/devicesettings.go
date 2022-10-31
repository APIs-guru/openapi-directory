package shared




type DeviceSettingsEncryptionStatusEnum string

const (
    DeviceSettingsEncryptionStatusEnumEncryptionStatusUnspecified DeviceSettingsEncryptionStatusEnum = "ENCRYPTION_STATUS_UNSPECIFIED"
DeviceSettingsEncryptionStatusEnumUnsupported DeviceSettingsEncryptionStatusEnum = "UNSUPPORTED"
DeviceSettingsEncryptionStatusEnumInactive DeviceSettingsEncryptionStatusEnum = "INACTIVE"
DeviceSettingsEncryptionStatusEnumActivating DeviceSettingsEncryptionStatusEnum = "ACTIVATING"
DeviceSettingsEncryptionStatusEnumActive DeviceSettingsEncryptionStatusEnum = "ACTIVE"
DeviceSettingsEncryptionStatusEnumActiveDefaultKey DeviceSettingsEncryptionStatusEnum = "ACTIVE_DEFAULT_KEY"
DeviceSettingsEncryptionStatusEnumActivePerUser DeviceSettingsEncryptionStatusEnum = "ACTIVE_PER_USER"
)


type DeviceSettings struct {
    AdbEnabled *bool `json:"adbEnabled,omitempty"`
    DevelopmentSettingsEnabled *bool `json:"developmentSettingsEnabled,omitempty"`
    EncryptionStatus *DeviceSettingsEncryptionStatusEnum `json:"encryptionStatus,omitempty"`
    IsDeviceSecure *bool `json:"isDeviceSecure,omitempty"`
    IsEncrypted *bool `json:"isEncrypted,omitempty"`
    UnknownSourcesEnabled *bool `json:"unknownSourcesEnabled,omitempty"`
    VerifyAppsEnabled *bool `json:"verifyAppsEnabled,omitempty"`
    
}

