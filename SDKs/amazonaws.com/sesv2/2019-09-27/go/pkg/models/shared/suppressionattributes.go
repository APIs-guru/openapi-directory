package shared

type SuppressionAttributes struct {
	SuppressedReasons []SuppressionListReasonEnum `json:"SuppressedReasons,omitempty"`
}
