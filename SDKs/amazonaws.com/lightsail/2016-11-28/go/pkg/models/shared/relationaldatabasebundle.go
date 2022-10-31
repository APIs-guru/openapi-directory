package shared



type RelationalDatabaseBundle struct {
    BundleID *string `json:"bundleId,omitempty"`
    CPUCount *int64 `json:"cpuCount,omitempty"`
    DiskSizeInGb *int64 `json:"diskSizeInGb,omitempty"`
    IsActive *bool `json:"isActive,omitempty"`
    IsEncrypted *bool `json:"isEncrypted,omitempty"`
    Name *string `json:"name,omitempty"`
    Price *float32 `json:"price,omitempty"`
    RAMSizeInGb *float32 `json:"ramSizeInGb,omitempty"`
    TransferPerMonthInGb *int64 `json:"transferPerMonthInGb,omitempty"`
    
}

