package shared



type GetLensVersionDifferenceOutput struct {
    BaseLensVersion *string `json:"BaseLensVersion,omitempty"`
    LatestLensVersion *string `json:"LatestLensVersion,omitempty"`
    LensAlias *string `json:"LensAlias,omitempty"`
    VersionDifferences *VersionDifferences `json:"VersionDifferences,omitempty"`
    
}

