package shared

// AspectDistribution
// This type contains information about one category aspect that is associated with a specified category.
type AspectDistribution struct {
	AspectValueDistributions []AspectValueDistribution `json:"aspectValueDistributions,omitempty"`
	LocalizedAspectName      *string                   `json:"localizedAspectName,omitempty"`
}
