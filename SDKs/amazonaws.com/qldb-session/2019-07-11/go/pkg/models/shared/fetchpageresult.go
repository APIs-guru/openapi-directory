package shared

type FetchPageResult struct {
	ConsumedIOs       *IoUsage           `json:"ConsumedIOs"`
	Page              *Page              `json:"Page"`
	TimingInformation *TimingInformation `json:"TimingInformation"`
}
