package shared

type AspectDistribution struct {
	AspectValueDistributions []AspectValueDistribution `json:"aspectValueDistributions"`
	LocalizedAspectName      *string                   `json:"localizedAspectName"`
}
