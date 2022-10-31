package shared

type ReportFrequency struct {
	Period *ReportFrequencyTypeEnum `json:"period,omitempty"`
	Value  *int64                   `json:"value,omitempty"`
}
