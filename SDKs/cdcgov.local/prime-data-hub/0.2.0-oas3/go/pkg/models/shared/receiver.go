package shared

type ReceiverJurisdictionalFiltersMatchFieldsEnum string

const (
	ReceiverJurisdictionalFiltersMatchFieldsEnumFacilityOrPatientAddress ReceiverJurisdictionalFiltersMatchFieldsEnum = "FACILITY_OR_PATIENT_ADDRESS"
	ReceiverJurisdictionalFiltersMatchFieldsEnumFacilityAddress          ReceiverJurisdictionalFiltersMatchFieldsEnum = "FACILITY_ADDRESS"
	ReceiverJurisdictionalFiltersMatchFieldsEnumFacilityName             ReceiverJurisdictionalFiltersMatchFieldsEnum = "FACILITY_NAME"
	ReceiverJurisdictionalFiltersMatchFieldsEnumAbnormalValue            ReceiverJurisdictionalFiltersMatchFieldsEnum = "ABNORMAL_VALUE"
)

type ReceiverJurisdictionalFilters struct {
	DoesNotMatch *bool                                         `json:"doesNotMatch"`
	MatchFields  *ReceiverJurisdictionalFiltersMatchFieldsEnum `json:"matchFields"`
	MatchValues  []string                                      `json:"matchValues"`
}

type ReceiverTimingFrequencyEnum string

const (
	ReceiverTimingFrequencyEnumRealTime ReceiverTimingFrequencyEnum = "REAL_TIME"
	ReceiverTimingFrequencyEnumHourly   ReceiverTimingFrequencyEnum = "HOURLY"
	ReceiverTimingFrequencyEnumDaily    ReceiverTimingFrequencyEnum = "DAILY"
)

type ReceiverTiming struct {
	DailyAt   *float64                    `json:"dailyAt"`
	Frequency ReceiverTimingFrequencyEnum `json:"frequency"`
}

type Receiver struct {
	Description           string                          `json:"description"`
	JurisdictionalFilters []ReceiverJurisdictionalFilters `json:"jurisdictionalFilters"`
	Meta                  *SettingMetadata                `json:"meta"`
	Name                  string                          `json:"name"`
	OrganizationName      *string                         `json:"organizationName"`
	Timing                ReceiverTiming                  `json:"timing"`
	Topic                 string                          `json:"topic"`
	Translations          []interface{}                   `json:"translations"`
}
