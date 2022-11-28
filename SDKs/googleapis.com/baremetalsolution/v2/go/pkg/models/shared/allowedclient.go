package shared

type AllowedClientMountPermissionsEnum string

const (
	AllowedClientMountPermissionsEnumMountPermissionsUnspecified AllowedClientMountPermissionsEnum = "MOUNT_PERMISSIONS_UNSPECIFIED"
	AllowedClientMountPermissionsEnumRead                        AllowedClientMountPermissionsEnum = "READ"
	AllowedClientMountPermissionsEnumReadWrite                   AllowedClientMountPermissionsEnum = "READ_WRITE"
)

// AllowedClient
// Represents an 'access point' for the share.
type AllowedClient struct {
	AllowDev           *bool                              `json:"allowDev,omitempty"`
	AllowSuid          *bool                              `json:"allowSuid,omitempty"`
	AllowedClientsCidr *string                            `json:"allowedClientsCidr,omitempty"`
	MountPermissions   *AllowedClientMountPermissionsEnum `json:"mountPermissions,omitempty"`
	Network            *string                            `json:"network,omitempty"`
	NfsPath            *string                            `json:"nfsPath,omitempty"`
	NoRootSquash       *bool                              `json:"noRootSquash,omitempty"`
	ShareIP            *string                            `json:"shareIp,omitempty"`
}

// AllowedClientInput
// Represents an 'access point' for the share.
type AllowedClientInput struct {
	AllowDev           *bool                              `json:"allowDev,omitempty"`
	AllowSuid          *bool                              `json:"allowSuid,omitempty"`
	AllowedClientsCidr *string                            `json:"allowedClientsCidr,omitempty"`
	MountPermissions   *AllowedClientMountPermissionsEnum `json:"mountPermissions,omitempty"`
	Network            *string                            `json:"network,omitempty"`
	NoRootSquash       *bool                              `json:"noRootSquash,omitempty"`
}
