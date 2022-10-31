package shared

type AspectDistribution struct {
	AspectValueDistributions []AspectValueDistribution `json:"aspectValueDistributions,omitempty"`
	LocalizedAspectName      *string                   `json:"localizedAspectName,omitempty"`
}
