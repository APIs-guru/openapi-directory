package shared

type GetLensVersionDifferenceOutput struct {
	BaseLensVersion    *string             `json:"BaseLensVersion"`
	LatestLensVersion  *string             `json:"LatestLensVersion"`
	LensAlias          *string             `json:"LensAlias"`
	VersionDifferences *VersionDifferences `json:"VersionDifferences"`
}
