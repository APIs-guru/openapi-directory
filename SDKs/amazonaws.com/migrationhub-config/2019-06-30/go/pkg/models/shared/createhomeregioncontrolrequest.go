package shared



type CreateHomeRegionControlRequest struct {
    DryRun *bool `json:"DryRun,omitempty"`
    HomeRegion string `json:"HomeRegion"`
    Target Target `json:"Target"`
    
}

