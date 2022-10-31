package shared

type ReceiverJurisdictionalFiltersMatchFieldsEnum string

const (
	ReceiverJurisdictionalFiltersMatchFieldsEnumFacilityOrPatientAddress ReceiverJurisdictionalFiltersMatchFieldsEnum = "FACILITY_OR_PATIENT_ADDRESS"
	ReceiverJurisdictionalFiltersMatchFieldsEnumFacilityAddress          ReceiverJurisdictionalFiltersMatchFieldsEnum = "FACILITY_ADDRESS"
	ReceiverJurisdictionalFiltersMatchFieldsEnumFacilityName             ReceiverJurisdictionalFiltersMatchFieldsEnum = "FACILITY_NAME"
	ReceiverJurisdictionalFiltersMatchFieldsEnumAbnormalValue            ReceiverJurisdictionalFiltersMatchFieldsEnum = "ABNORMAL_VALUE"
)

type ReceiverJurisdictionalFilters struct {
	DoesNotMatch *bool                                         `json:"doesNotMatch,omitempty"`
	MatchFields  *ReceiverJurisdictionalFiltersMatchFieldsEnum `json:"matchFields,omitempty"`
	MatchValues  []string                                      `json:"matchValues,omitempty"`
}

type ReceiverTimingFrequencyEnum string

const (
	ReceiverTimingFrequencyEnumRealTime ReceiverTimingFrequencyEnum = "REAL_TIME"
	ReceiverTimingFrequencyEnumHourly   ReceiverTimingFrequencyEnum = "HOURLY"
	ReceiverTimingFrequencyEnumDaily    ReceiverTimingFrequencyEnum = "DAILY"
)

type ReceiverTiming struct {
	DailyAt   *float64                    `json:"dailyAt,omitempty"`
	Frequency ReceiverTimingFrequencyEnum `json:"frequency"`
}

type Receiver struct {
	Description           string                          `json:"description"`
	JurisdictionalFilters []ReceiverJurisdictionalFilters `json:"jurisdictionalFilters,omitempty"`
	Meta                  *SettingMetadata                `json:"meta,omitempty"`
	Name                  string                          `json:"name"`
	OrganizationName      *string                         `json:"organizationName,omitempty"`
	Timing                ReceiverTiming                  `json:"timing"`
	Topic                 string                          `json:"topic"`
	Translations          []interface{}                   `json:"translations,omitempty"`
}
