package shared



type ImportYumArtifactsGcsSource struct {
    Uris []string `json:"uris,omitempty"`
    UseWildcards *bool `json:"useWildcards,omitempty"`
    
}

