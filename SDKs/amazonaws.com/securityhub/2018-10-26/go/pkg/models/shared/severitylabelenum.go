package shared

type SeverityLabelEnum string

const (
	SeverityLabelEnumInformational SeverityLabelEnum = "INFORMATIONAL"
	SeverityLabelEnumLow           SeverityLabelEnum = "LOW"
	SeverityLabelEnumMedium        SeverityLabelEnum = "MEDIUM"
	SeverityLabelEnumHigh          SeverityLabelEnum = "HIGH"
	SeverityLabelEnumCritical      SeverityLabelEnum = "CRITICAL"
)
