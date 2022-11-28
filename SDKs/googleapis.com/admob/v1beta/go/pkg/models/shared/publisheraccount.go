package shared

// PublisherAccount
// A publisher account contains information relevant to the use of this API, such as the time zone used for the reports.
type PublisherAccount struct {
	CurrencyCode      *string `json:"currencyCode,omitempty"`
	Name              *string `json:"name,omitempty"`
	PublisherID       *string `json:"publisherId,omitempty"`
	ReportingTimeZone *string `json:"reportingTimeZone,omitempty"`
}
