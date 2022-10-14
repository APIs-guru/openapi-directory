package shared

type ExecuteStatementResult struct {
	ConsumedIOs       *IoUsage           `json:"ConsumedIOs,omitempty"`
	FirstPage         *Page              `json:"FirstPage,omitempty"`
	TimingInformation *TimingInformation `json:"TimingInformation,omitempty"`
}
