package shared

// BucketBundle
// <p>Describes the specifications of a bundle that can be applied to an Amazon Lightsail bucket.</p> <p>A bucket bundle specifies the monthly cost, storage space, and data transfer quota for a bucket.</p>
type BucketBundle struct {
	BundleID             *string  `json:"bundleId,omitempty"`
	IsActive             *bool    `json:"isActive,omitempty"`
	Name                 *string  `json:"name,omitempty"`
	Price                *float32 `json:"price,omitempty"`
	StoragePerMonthInGb  *int64   `json:"storagePerMonthInGb,omitempty"`
	TransferPerMonthInGb *int64   `json:"transferPerMonthInGb,omitempty"`
}
