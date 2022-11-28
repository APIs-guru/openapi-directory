package shared

// PausedStateContext
// Information specific to a subscription in paused state.
type PausedStateContext struct {
	AutoResumeTime *string `json:"autoResumeTime,omitempty"`
}
