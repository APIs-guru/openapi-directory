package shared

type ContinueWatchingListDataExpansion struct {
	Episode *ItemSummary `json:"episode,omitempty"`
	Season  *ItemSummary `json:"season,omitempty"`
	Show    *ItemSummary `json:"show,omitempty"`
}
