package shared



type DeleteDiskRequest struct {
    DiskName string `json:"diskName"`
    ForceDeleteAddOns *bool `json:"forceDeleteAddOns,omitempty"`
    
}

