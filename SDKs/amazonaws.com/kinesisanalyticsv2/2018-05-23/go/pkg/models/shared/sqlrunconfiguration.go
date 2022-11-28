package shared

// SQLRunConfiguration
// Describes the starting parameters for a SQL-based Kinesis Data Analytics application.
type SQLRunConfiguration struct {
	InputID                            string                             `json:"InputId"`
	InputStartingPositionConfiguration InputStartingPositionConfiguration `json:"InputStartingPositionConfiguration"`
}
