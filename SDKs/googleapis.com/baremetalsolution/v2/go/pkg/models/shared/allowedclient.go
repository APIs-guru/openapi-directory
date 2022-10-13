package shared

type AllowedClientMountPermissionsEnum string

const (
	AllowedClientMountPermissionsEnumMountPermissionsUnspecified AllowedClientMountPermissionsEnum = "MOUNT_PERMISSIONS_UNSPECIFIED"
	AllowedClientMountPermissionsEnumRead                        AllowedClientMountPermissionsEnum = "READ"
	AllowedClientMountPermissionsEnumReadWrite                   AllowedClientMountPermissionsEnum = "READ_WRITE"
)

type AllowedClient struct {
	AllowDev           *bool                              `json:"allowDev"`
	AllowSuid          *bool                              `json:"allowSuid"`
	AllowedClientsCidr *string                            `json:"allowedClientsCidr"`
	MountPermissions   *AllowedClientMountPermissionsEnum `json:"mountPermissions"`
	Network            *string                            `json:"network"`
	NfsPath            *string                            `json:"nfsPath"`
	NoRootSquash       *bool                              `json:"noRootSquash"`
	ShareIP            *string                            `json:"shareIp"`
}
