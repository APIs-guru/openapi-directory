package shared

type Refinement struct {
	AspectDistributions []AspectDistribution `json:"aspectDistributions,omitempty"`
	DominantCategoryID  *string              `json:"dominantCategoryId,omitempty"`
}
