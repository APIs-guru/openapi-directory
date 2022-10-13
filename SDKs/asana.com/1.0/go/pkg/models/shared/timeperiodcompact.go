package shared

type TimePeriodCompactPeriodEnum string

const (
	TimePeriodCompactPeriodEnumFy TimePeriodCompactPeriodEnum = "FY"
	TimePeriodCompactPeriodEnumH1 TimePeriodCompactPeriodEnum = "H1"
	TimePeriodCompactPeriodEnumH2 TimePeriodCompactPeriodEnum = "H2"
	TimePeriodCompactPeriodEnumQ1 TimePeriodCompactPeriodEnum = "Q1"
	TimePeriodCompactPeriodEnumQ2 TimePeriodCompactPeriodEnum = "Q2"
	TimePeriodCompactPeriodEnumQ3 TimePeriodCompactPeriodEnum = "Q3"
	TimePeriodCompactPeriodEnumQ4 TimePeriodCompactPeriodEnum = "Q4"
)

type TimePeriodCompact struct {
	EndOn        *string                      `json:"end_on"`
	Gid          *string                      `json:"gid"`
	Period       *TimePeriodCompactPeriodEnum `json:"period"`
	ResourceType *string                      `json:"resource_type"`
	StartOn      *string                      `json:"start_on"`
}
