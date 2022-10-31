package shared



type LayerVersionsListItem struct {
    CompatibleRuntimes []RuntimeEnum `json:"CompatibleRuntimes,omitempty"`
    CreatedDate *string `json:"CreatedDate,omitempty"`
    Description *string `json:"Description,omitempty"`
    LayerVersionArn *string `json:"LayerVersionArn,omitempty"`
    LicenseInfo *string `json:"LicenseInfo,omitempty"`
    Version *int64 `json:"Version,omitempty"`
    
}

