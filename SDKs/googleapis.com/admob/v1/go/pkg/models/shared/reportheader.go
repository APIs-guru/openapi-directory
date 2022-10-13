package shared

type ReportHeader struct {
	DateRange            *DateRange            `json:"dateRange"`
	LocalizationSettings *LocalizationSettings `json:"localizationSettings"`
	ReportingTimeZone    *string               `json:"reportingTimeZone"`
}
