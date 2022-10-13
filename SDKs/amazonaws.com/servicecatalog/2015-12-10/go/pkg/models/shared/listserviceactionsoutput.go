package shared

type ListServiceActionsOutput struct {
	NextPageToken          *string                `json:"NextPageToken"`
	ServiceActionSummaries []ServiceActionSummary `json:"ServiceActionSummaries"`
}
