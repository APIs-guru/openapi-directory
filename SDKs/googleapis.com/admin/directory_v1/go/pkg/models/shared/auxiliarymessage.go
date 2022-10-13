package shared

type AuxiliaryMessageSeverityEnum string

const (
	AuxiliaryMessageSeverityEnumSeverityUnspecified AuxiliaryMessageSeverityEnum = "SEVERITY_UNSPECIFIED"
	AuxiliaryMessageSeverityEnumSeverityInfo        AuxiliaryMessageSeverityEnum = "SEVERITY_INFO"
	AuxiliaryMessageSeverityEnumSeverityWarning     AuxiliaryMessageSeverityEnum = "SEVERITY_WARNING"
	AuxiliaryMessageSeverityEnumSeverityError       AuxiliaryMessageSeverityEnum = "SEVERITY_ERROR"
)

type AuxiliaryMessage struct {
	AuxiliaryMessage *string                       `json:"auxiliaryMessage"`
	FieldMask        *string                       `json:"fieldMask"`
	Severity         *AuxiliaryMessageSeverityEnum `json:"severity"`
}
