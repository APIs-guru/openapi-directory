package shared

type DeviceSettingsEncryptionStatusEnum string

const (
	DeviceSettingsEncryptionStatusEnumEncryptionStatusUnspecified DeviceSettingsEncryptionStatusEnum = "ENCRYPTION_STATUS_UNSPECIFIED"
	DeviceSettingsEncryptionStatusEnumUnsupported                 DeviceSettingsEncryptionStatusEnum = "UNSUPPORTED"
	DeviceSettingsEncryptionStatusEnumInactive                    DeviceSettingsEncryptionStatusEnum = "INACTIVE"
	DeviceSettingsEncryptionStatusEnumActivating                  DeviceSettingsEncryptionStatusEnum = "ACTIVATING"
	DeviceSettingsEncryptionStatusEnumActive                      DeviceSettingsEncryptionStatusEnum = "ACTIVE"
	DeviceSettingsEncryptionStatusEnumActiveDefaultKey            DeviceSettingsEncryptionStatusEnum = "ACTIVE_DEFAULT_KEY"
	DeviceSettingsEncryptionStatusEnumActivePerUser               DeviceSettingsEncryptionStatusEnum = "ACTIVE_PER_USER"
)

type DeviceSettings struct {
	AdbEnabled                 *bool                               `json:"adbEnabled"`
	DevelopmentSettingsEnabled *bool                               `json:"developmentSettingsEnabled"`
	EncryptionStatus           *DeviceSettingsEncryptionStatusEnum `json:"encryptionStatus"`
	IsDeviceSecure             *bool                               `json:"isDeviceSecure"`
	IsEncrypted                *bool                               `json:"isEncrypted"`
	UnknownSourcesEnabled      *bool                               `json:"unknownSourcesEnabled"`
	VerifyAppsEnabled          *bool                               `json:"verifyAppsEnabled"`
}
