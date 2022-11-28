package shared

// IncreaseStreamRetentionPeriodInput
// Represents the input for <a>IncreaseStreamRetentionPeriod</a>.
type IncreaseStreamRetentionPeriodInput struct {
	RetentionPeriodHours int64  `json:"RetentionPeriodHours"`
	StreamName           string `json:"StreamName"`
}
