package shared

type ReportFrequency struct {
	Period *ReportFrequencyTypeEnum `json:"period"`
	Value  *int64                   `json:"value"`
}
