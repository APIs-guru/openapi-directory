package shared

type ListArtifactsResponse struct {
	ArtifactSummaries []ArtifactSummary `json:"ArtifactSummaries"`
	NextToken         *string           `json:"NextToken"`
}
