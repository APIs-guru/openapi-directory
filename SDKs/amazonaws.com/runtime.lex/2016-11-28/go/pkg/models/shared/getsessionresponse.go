package shared

type GetSessionResponse struct {
	ActiveContexts          []ActiveContext   `json:"activeContexts,omitempty"`
	DialogAction            *DialogAction     `json:"dialogAction,omitempty"`
	RecentIntentSummaryView []IntentSummary   `json:"recentIntentSummaryView,omitempty"`
	SessionAttributes       map[string]string `json:"sessionAttributes,omitempty"`
	SessionID               *string           `json:"sessionId,omitempty"`
}
