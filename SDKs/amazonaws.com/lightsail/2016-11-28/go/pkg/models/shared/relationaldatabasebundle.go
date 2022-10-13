package shared

type RelationalDatabaseBundle struct {
	BundleID             *string  `json:"bundleId"`
	CPUCount             *int64   `json:"cpuCount"`
	DiskSizeInGb         *int64   `json:"diskSizeInGb"`
	IsActive             *bool    `json:"isActive"`
	IsEncrypted          *bool    `json:"isEncrypted"`
	Name                 *string  `json:"name"`
	Price                *float32 `json:"price"`
	RAMSizeInGb          *float32 `json:"ramSizeInGb"`
	TransferPerMonthInGb *int64   `json:"transferPerMonthInGb"`
}
