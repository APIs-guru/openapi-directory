package shared



type GetBlueprintsResult struct {
    Blueprints []Blueprint `json:"blueprints,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

