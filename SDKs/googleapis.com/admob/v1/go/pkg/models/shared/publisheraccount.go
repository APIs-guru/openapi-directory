package shared

type PublisherAccount struct {
	CurrencyCode      *string `json:"currencyCode,omitempty"`
	Name              *string `json:"name,omitempty"`
	PublisherID       *string `json:"publisherId,omitempty"`
	ReportingTimeZone *string `json:"reportingTimeZone,omitempty"`
}
