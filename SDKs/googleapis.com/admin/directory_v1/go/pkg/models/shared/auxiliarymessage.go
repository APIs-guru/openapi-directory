package shared

type AuxiliaryMessageSeverityEnum string

const (
	AuxiliaryMessageSeverityEnumSeverityUnspecified AuxiliaryMessageSeverityEnum = "SEVERITY_UNSPECIFIED"
	AuxiliaryMessageSeverityEnumSeverityInfo        AuxiliaryMessageSeverityEnum = "SEVERITY_INFO"
	AuxiliaryMessageSeverityEnumSeverityWarning     AuxiliaryMessageSeverityEnum = "SEVERITY_WARNING"
	AuxiliaryMessageSeverityEnumSeverityError       AuxiliaryMessageSeverityEnum = "SEVERITY_ERROR"
)

// AuxiliaryMessage
// Auxiliary message about issues with printers or settings. Example: {message_type:AUXILIARY_MESSAGE_WARNING, field_mask:make_and_model, message:"Given printer is invalid or no longer supported."}
type AuxiliaryMessage struct {
	AuxiliaryMessage *string                       `json:"auxiliaryMessage,omitempty"`
	FieldMask        *string                       `json:"fieldMask,omitempty"`
	Severity         *AuxiliaryMessageSeverityEnum `json:"severity,omitempty"`
}
