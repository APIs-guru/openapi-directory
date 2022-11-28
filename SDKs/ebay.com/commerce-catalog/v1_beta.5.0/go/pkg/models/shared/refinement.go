package shared

// Refinement
// This type identifies a product category and the aspects associated with that category. Each aspect distribution container returns the distribution of values that have been used for the aspect.
type Refinement struct {
	AspectDistributions []AspectDistribution `json:"aspectDistributions,omitempty"`
	DominantCategoryID  *string              `json:"dominantCategoryId,omitempty"`
}
