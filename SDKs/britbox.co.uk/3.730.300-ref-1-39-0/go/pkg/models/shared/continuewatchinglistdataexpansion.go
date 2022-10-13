package shared

type ContinueWatchingListDataExpansion struct {
	Episode *ItemSummary `json:"episode"`
	Season  *ItemSummary `json:"season"`
	Show    *ItemSummary `json:"show"`
}
