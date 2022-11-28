package shared

// ExecuteStatementResult
// Contains the details of the executed statement.
type ExecuteStatementResult struct {
	ConsumedIOs       *IoUsage           `json:"ConsumedIOs,omitempty"`
	FirstPage         *Page              `json:"FirstPage,omitempty"`
	TimingInformation *TimingInformation `json:"TimingInformation,omitempty"`
}
