package shared

type BucketBundle struct {
	BundleID             *string  `json:"bundleId"`
	IsActive             *bool    `json:"isActive"`
	Name                 *string  `json:"name"`
	Price                *float32 `json:"price"`
	StoragePerMonthInGb  *int64   `json:"storagePerMonthInGb"`
	TransferPerMonthInGb *int64   `json:"transferPerMonthInGb"`
}
