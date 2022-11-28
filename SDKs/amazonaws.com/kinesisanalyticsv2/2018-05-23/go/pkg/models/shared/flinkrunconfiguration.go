package shared

// FlinkRunConfiguration
// Describes the starting parameters for a Flink-based Kinesis Data Analytics application.
type FlinkRunConfiguration struct {
	AllowNonRestoredState *bool `json:"AllowNonRestoredState,omitempty"`
}
