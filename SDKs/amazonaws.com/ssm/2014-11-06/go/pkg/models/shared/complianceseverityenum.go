package shared

type ComplianceSeverityEnum string

const (
	ComplianceSeverityEnumCritical      ComplianceSeverityEnum = "CRITICAL"
	ComplianceSeverityEnumHigh          ComplianceSeverityEnum = "HIGH"
	ComplianceSeverityEnumMedium        ComplianceSeverityEnum = "MEDIUM"
	ComplianceSeverityEnumLow           ComplianceSeverityEnum = "LOW"
	ComplianceSeverityEnumInformational ComplianceSeverityEnum = "INFORMATIONAL"
	ComplianceSeverityEnumUnspecified   ComplianceSeverityEnum = "UNSPECIFIED"
)
