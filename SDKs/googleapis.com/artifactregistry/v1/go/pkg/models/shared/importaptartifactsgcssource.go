package shared



type ImportAptArtifactsGcsSource struct {
    Uris []string `json:"uris,omitempty"`
    UseWildcards *bool `json:"useWildcards,omitempty"`
    
}

