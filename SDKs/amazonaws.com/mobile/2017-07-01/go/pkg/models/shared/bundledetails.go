package shared



type BundleDetails struct {
    AvailablePlatforms []PlatformEnum `json:"availablePlatforms,omitempty"`
    BundleID *string `json:"bundleId,omitempty"`
    Description *string `json:"description,omitempty"`
    IconURL *string `json:"iconUrl,omitempty"`
    Title *string `json:"title,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

