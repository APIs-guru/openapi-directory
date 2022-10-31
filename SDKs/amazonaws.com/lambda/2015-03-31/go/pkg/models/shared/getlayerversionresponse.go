package shared



type GetLayerVersionResponse struct {
    CompatibleRuntimes []RuntimeEnum `json:"CompatibleRuntimes,omitempty"`
    Content *LayerVersionContentOutput `json:"Content,omitempty"`
    CreatedDate *string `json:"CreatedDate,omitempty"`
    Description *string `json:"Description,omitempty"`
    LayerArn *string `json:"LayerArn,omitempty"`
    LayerVersionArn *string `json:"LayerVersionArn,omitempty"`
    LicenseInfo *string `json:"LicenseInfo,omitempty"`
    Version *int64 `json:"Version,omitempty"`
    
}

