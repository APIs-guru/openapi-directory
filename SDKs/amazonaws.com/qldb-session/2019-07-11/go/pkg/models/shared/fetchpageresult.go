package shared



type FetchPageResult struct {
    ConsumedIOs *IoUsage `json:"ConsumedIOs,omitempty"`
    Page *Page `json:"Page,omitempty"`
    TimingInformation *TimingInformation `json:"TimingInformation,omitempty"`
    
}

