package shared

// ReportHeader
// Groups data helps to treat the generated report. Always sent as a first message in the stream response.
type ReportHeader struct {
	DateRange            *DateRange            `json:"dateRange,omitempty"`
	LocalizationSettings *LocalizationSettings `json:"localizationSettings,omitempty"`
	ReportingTimeZone    *string               `json:"reportingTimeZone,omitempty"`
}
