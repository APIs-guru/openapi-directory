package shared

type Bundle struct {
	BundleID             *string                `json:"bundleId,omitempty"`
	CPUCount             *int64                 `json:"cpuCount,omitempty"`
	DiskSizeInGb         *int64                 `json:"diskSizeInGb,omitempty"`
	InstanceType         *string                `json:"instanceType,omitempty"`
	IsActive             *bool                  `json:"isActive,omitempty"`
	Name                 *string                `json:"name,omitempty"`
	Power                *int64                 `json:"power,omitempty"`
	Price                *float32               `json:"price,omitempty"`
	RAMSizeInGb          *float32               `json:"ramSizeInGb,omitempty"`
	SupportedPlatforms   []InstancePlatformEnum `json:"supportedPlatforms,omitempty"`
	TransferPerMonthInGb *int64                 `json:"transferPerMonthInGb,omitempty"`
}
