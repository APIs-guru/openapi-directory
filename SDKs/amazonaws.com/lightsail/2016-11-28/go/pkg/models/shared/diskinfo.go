package shared



type DiskInfo struct {
    IsSystemDisk *bool `json:"isSystemDisk,omitempty"`
    Name *string `json:"name,omitempty"`
    Path *string `json:"path,omitempty"`
    SizeInGb *int64 `json:"sizeInGb,omitempty"`
    
}

