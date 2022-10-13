package shared

type Bundle struct {
	BundleID             *string                `json:"bundleId"`
	CPUCount             *int64                 `json:"cpuCount"`
	DiskSizeInGb         *int64                 `json:"diskSizeInGb"`
	InstanceType         *string                `json:"instanceType"`
	IsActive             *bool                  `json:"isActive"`
	Name                 *string                `json:"name"`
	Power                *int64                 `json:"power"`
	Price                *float32               `json:"price"`
	RAMSizeInGb          *float32               `json:"ramSizeInGb"`
	SupportedPlatforms   []InstancePlatformEnum `json:"supportedPlatforms"`
	TransferPerMonthInGb *int64                 `json:"transferPerMonthInGb"`
}
