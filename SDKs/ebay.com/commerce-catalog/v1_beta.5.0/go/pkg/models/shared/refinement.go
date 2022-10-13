package shared

type Refinement struct {
	AspectDistributions []AspectDistribution `json:"aspectDistributions"`
	DominantCategoryID  *string              `json:"dominantCategoryId"`
}
