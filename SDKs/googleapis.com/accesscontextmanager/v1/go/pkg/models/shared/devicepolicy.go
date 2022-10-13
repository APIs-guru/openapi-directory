package shared

type DevicePolicyAllowedDeviceManagementLevelsEnum string

const (
	DevicePolicyAllowedDeviceManagementLevelsEnumManagementUnspecified DevicePolicyAllowedDeviceManagementLevelsEnum = "MANAGEMENT_UNSPECIFIED"
	DevicePolicyAllowedDeviceManagementLevelsEnumNone                  DevicePolicyAllowedDeviceManagementLevelsEnum = "NONE"
	DevicePolicyAllowedDeviceManagementLevelsEnumBasic                 DevicePolicyAllowedDeviceManagementLevelsEnum = "BASIC"
	DevicePolicyAllowedDeviceManagementLevelsEnumComplete              DevicePolicyAllowedDeviceManagementLevelsEnum = "COMPLETE"
)

type DevicePolicyAllowedEncryptionStatusesEnum string

const (
	DevicePolicyAllowedEncryptionStatusesEnumEncryptionUnspecified DevicePolicyAllowedEncryptionStatusesEnum = "ENCRYPTION_UNSPECIFIED"
	DevicePolicyAllowedEncryptionStatusesEnumEncryptionUnsupported DevicePolicyAllowedEncryptionStatusesEnum = "ENCRYPTION_UNSUPPORTED"
	DevicePolicyAllowedEncryptionStatusesEnumUnencrypted           DevicePolicyAllowedEncryptionStatusesEnum = "UNENCRYPTED"
	DevicePolicyAllowedEncryptionStatusesEnumEncrypted             DevicePolicyAllowedEncryptionStatusesEnum = "ENCRYPTED"
)

type DevicePolicy struct {
	AllowedDeviceManagementLevels []DevicePolicyAllowedDeviceManagementLevelsEnum `json:"allowedDeviceManagementLevels"`
	AllowedEncryptionStatuses     []DevicePolicyAllowedEncryptionStatusesEnum     `json:"allowedEncryptionStatuses"`
	OsConstraints                 []OsConstraint                                  `json:"osConstraints"`
	RequireAdminApproval          *bool                                           `json:"requireAdminApproval"`
	RequireCorpOwned              *bool                                           `json:"requireCorpOwned"`
	RequireScreenlock             *bool                                           `json:"requireScreenlock"`
}
