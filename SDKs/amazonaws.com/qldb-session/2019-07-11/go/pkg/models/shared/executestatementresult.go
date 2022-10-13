package shared

type ExecuteStatementResult struct {
	ConsumedIOs       *IoUsage           `json:"ConsumedIOs"`
	FirstPage         *Page              `json:"FirstPage"`
	TimingInformation *TimingInformation `json:"TimingInformation"`
}
