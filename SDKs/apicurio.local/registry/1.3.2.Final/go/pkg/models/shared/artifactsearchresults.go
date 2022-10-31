package shared



type ArtifactSearchResults struct {
    Artifacts []SearchedArtifact `json:"artifacts"`
    Count int64 `json:"count"`
    
}

