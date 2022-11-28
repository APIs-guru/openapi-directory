package shared

// ReportFrequency
// Details on how frequently reports are generated.
type ReportFrequency struct {
	Period *ReportFrequencyTypeEnum `json:"period,omitempty"`
	Value  *int64                   `json:"value,omitempty"`
}
