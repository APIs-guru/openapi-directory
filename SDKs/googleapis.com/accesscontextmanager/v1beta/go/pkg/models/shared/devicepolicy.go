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
	AllowedDeviceManagementLevels []DevicePolicyAllowedDeviceManagementLevelsEnum `json:"allowedDeviceManagementLevels,omitempty"`
	AllowedEncryptionStatuses     []DevicePolicyAllowedEncryptionStatusesEnum     `json:"allowedEncryptionStatuses,omitempty"`
	OsConstraints                 []OsConstraint                                  `json:"osConstraints,omitempty"`
	RequireAdminApproval          *bool                                           `json:"requireAdminApproval,omitempty"`
	RequireCorpOwned              *bool                                           `json:"requireCorpOwned,omitempty"`
	RequireScreenlock             *bool                                           `json:"requireScreenlock,omitempty"`
}
