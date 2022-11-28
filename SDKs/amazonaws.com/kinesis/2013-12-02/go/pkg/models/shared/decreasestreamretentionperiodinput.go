package shared

// DecreaseStreamRetentionPeriodInput
// Represents the input for <a>DecreaseStreamRetentionPeriod</a>.
type DecreaseStreamRetentionPeriodInput struct {
	RetentionPeriodHours int64  `json:"RetentionPeriodHours"`
	StreamName           string `json:"StreamName"`
}
