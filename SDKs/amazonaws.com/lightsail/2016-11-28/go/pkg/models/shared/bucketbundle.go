package shared

type BucketBundle struct {
	BundleID             *string  `json:"bundleId,omitempty"`
	IsActive             *bool    `json:"isActive,omitempty"`
	Name                 *string  `json:"name,omitempty"`
	Price                *float32 `json:"price,omitempty"`
	StoragePerMonthInGb  *int64   `json:"storagePerMonthInGb,omitempty"`
	TransferPerMonthInGb *int64   `json:"transferPerMonthInGb,omitempty"`
}
