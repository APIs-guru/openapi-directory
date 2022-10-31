package shared



type AttachedDisk struct {
    Path *string `json:"path,omitempty"`
    SizeInGb *int64 `json:"sizeInGb,omitempty"`
    
}

