package shared



type FileshareUsage struct {
    AvailableSpace *string `json:"available_space,omitempty"`
    TotalSpace *string `json:"total_space,omitempty"`
    UsedSpace *string `json:"used_space,omitempty"`
    UsedSpacePercentage *string `json:"used_space_percentage,omitempty"`
    
}

