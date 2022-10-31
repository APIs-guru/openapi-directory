package shared




type NfsExportPermissionsEnum string

const (
    NfsExportPermissionsEnumPermissionsUnspecified NfsExportPermissionsEnum = "PERMISSIONS_UNSPECIFIED"
NfsExportPermissionsEnumReadOnly NfsExportPermissionsEnum = "READ_ONLY"
NfsExportPermissionsEnumReadWrite NfsExportPermissionsEnum = "READ_WRITE"
)


type NfsExport struct {
    AllowDev *bool `json:"allowDev,omitempty"`
    AllowSuid *bool `json:"allowSuid,omitempty"`
    Cidr *string `json:"cidr,omitempty"`
    MachineID *string `json:"machineId,omitempty"`
    NetworkID *string `json:"networkId,omitempty"`
    NoRootSquash *bool `json:"noRootSquash,omitempty"`
    Permissions *NfsExportPermissionsEnum `json:"permissions,omitempty"`
    
}

