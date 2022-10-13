package shared

type GetSessionResponse struct {
	ActiveContexts          []ActiveContext   `json:"activeContexts"`
	DialogAction            *DialogAction     `json:"dialogAction"`
	RecentIntentSummaryView []IntentSummary   `json:"recentIntentSummaryView"`
	SessionAttributes       map[string]string `json:"sessionAttributes"`
	SessionID               *string           `json:"sessionId"`
}
