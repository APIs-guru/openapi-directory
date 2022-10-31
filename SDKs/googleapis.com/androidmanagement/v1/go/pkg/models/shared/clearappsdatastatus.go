package shared



type ClearAppsDataStatus struct {
    Results map[string]PerAppResult `json:"results,omitempty"`
    
}

