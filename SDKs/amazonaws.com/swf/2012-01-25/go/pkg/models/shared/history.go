package shared

// History
// Paginated representation of a workflow history for a workflow execution. This is the up to date, complete and authoritative record of the events related to all tasks and events in the life of the workflow execution.
type History struct {
	Events        []HistoryEvent `json:"events"`
	NextPageToken *string        `json:"nextPageToken,omitempty"`
}
