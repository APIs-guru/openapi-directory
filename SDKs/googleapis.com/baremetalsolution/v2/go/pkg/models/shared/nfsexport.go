package shared

type NfsExportPermissionsEnum string

const (
	NfsExportPermissionsEnumPermissionsUnspecified NfsExportPermissionsEnum = "PERMISSIONS_UNSPECIFIED"
	NfsExportPermissionsEnumReadOnly               NfsExportPermissionsEnum = "READ_ONLY"
	NfsExportPermissionsEnumReadWrite              NfsExportPermissionsEnum = "READ_WRITE"
)

type NfsExport struct {
	AllowDev     *bool                     `json:"allowDev"`
	AllowSuid    *bool                     `json:"allowSuid"`
	Cidr         *string                   `json:"cidr"`
	MachineID    *string                   `json:"machineId"`
	NetworkID    *string                   `json:"networkId"`
	NoRootSquash *bool                     `json:"noRootSquash"`
	Permissions  *NfsExportPermissionsEnum `json:"permissions"`
}
