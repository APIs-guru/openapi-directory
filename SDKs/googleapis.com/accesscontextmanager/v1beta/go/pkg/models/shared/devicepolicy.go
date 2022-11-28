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

// DevicePolicy
// `DevicePolicy` specifies device specific restrictions necessary to acquire a given access level. A `DevicePolicy` specifies requirements for requests from devices to be granted access levels, it does not do any enforcement on the device. `DevicePolicy` acts as an AND over all specified fields, and each repeated field is an OR over its elements. Any unset fields are ignored. For example, if the proto is { os_type : DESKTOP_WINDOWS, os_type : DESKTOP_LINUX, encryption_status: ENCRYPTED}, then the DevicePolicy will be true for requests originating from encrypted Linux desktops and encrypted Windows desktops.
type DevicePolicy struct {
	AllowedDeviceManagementLevels []DevicePolicyAllowedDeviceManagementLevelsEnum `json:"allowedDeviceManagementLevels,omitempty"`
	AllowedEncryptionStatuses     []DevicePolicyAllowedEncryptionStatusesEnum     `json:"allowedEncryptionStatuses,omitempty"`
	OsConstraints                 []OsConstraint                                  `json:"osConstraints,omitempty"`
	RequireAdminApproval          *bool                                           `json:"requireAdminApproval,omitempty"`
	RequireCorpOwned              *bool                                           `json:"requireCorpOwned,omitempty"`
	RequireScreenlock             *bool                                           `json:"requireScreenlock,omitempty"`
}
