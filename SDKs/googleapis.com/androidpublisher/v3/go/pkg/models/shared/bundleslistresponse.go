package shared



type BundlesListResponse struct {
    Bundles []Bundle `json:"bundles,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

