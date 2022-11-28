package shared

// FetchPageResult
// Contains the page that was fetched.
type FetchPageResult struct {
	ConsumedIOs       *IoUsage           `json:"ConsumedIOs,omitempty"`
	Page              *Page              `json:"Page,omitempty"`
	TimingInformation *TimingInformation `json:"TimingInformation,omitempty"`
}
