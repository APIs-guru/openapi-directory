package shared

type ReportHeader struct {
	DateRange            *DateRange            `json:"dateRange,omitempty"`
	LocalizationSettings *LocalizationSettings `json:"localizationSettings,omitempty"`
	ReportingTimeZone    *string               `json:"reportingTimeZone,omitempty"`
}
