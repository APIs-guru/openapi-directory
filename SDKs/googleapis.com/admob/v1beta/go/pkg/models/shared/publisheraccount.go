package shared

type PublisherAccount struct {
	CurrencyCode      *string `json:"currencyCode"`
	Name              *string `json:"name"`
	PublisherID       *string `json:"publisherId"`
	ReportingTimeZone *string `json:"reportingTimeZone"`
}
