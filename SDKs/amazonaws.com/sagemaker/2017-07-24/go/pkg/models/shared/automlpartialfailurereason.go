package shared

// AutoMlPartialFailureReason
// The reason for a partial failure of an AutoML job.
type AutoMlPartialFailureReason struct {
	PartialFailureMessage *string `json:"PartialFailureMessage,omitempty"`
}
