package shared




type TimePeriodResponsePeriodEnum string

const (
    TimePeriodResponsePeriodEnumFy TimePeriodResponsePeriodEnum = "FY"
TimePeriodResponsePeriodEnumH1 TimePeriodResponsePeriodEnum = "H1"
TimePeriodResponsePeriodEnumH2 TimePeriodResponsePeriodEnum = "H2"
TimePeriodResponsePeriodEnumQ1 TimePeriodResponsePeriodEnum = "Q1"
TimePeriodResponsePeriodEnumQ2 TimePeriodResponsePeriodEnum = "Q2"
TimePeriodResponsePeriodEnumQ3 TimePeriodResponsePeriodEnum = "Q3"
TimePeriodResponsePeriodEnumQ4 TimePeriodResponsePeriodEnum = "Q4"
)


type TimePeriodResponse struct {
    EndOn *string `json:"end_on,omitempty"`
    Gid *string `json:"gid,omitempty"`
    Parent *TimePeriodCompact `json:"parent,omitempty"`
    Period *TimePeriodResponsePeriodEnum `json:"period,omitempty"`
    ResourceType *string `json:"resource_type,omitempty"`
    StartOn *string `json:"start_on,omitempty"`
    
}

