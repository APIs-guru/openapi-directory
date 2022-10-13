package shared

type DistributionBundle struct {
	BundleID             *string  `json:"bundleId"`
	IsActive             *bool    `json:"isActive"`
	Name                 *string  `json:"name"`
	Price                *float32 `json:"price"`
	TransferPerMonthInGb *int64   `json:"transferPerMonthInGb"`
}
