package shared



type URLTargeting struct {
    ExcludedUrls []string `json:"excludedUrls,omitempty"`
    TargetedUrls []string `json:"targetedUrls,omitempty"`
    
}

