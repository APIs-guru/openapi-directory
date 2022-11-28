package shared

type TransferMessageSeverityEnum string

const (
	TransferMessageSeverityEnumMessageSeverityUnspecified TransferMessageSeverityEnum = "MESSAGE_SEVERITY_UNSPECIFIED"
	TransferMessageSeverityEnumInfo                       TransferMessageSeverityEnum = "INFO"
	TransferMessageSeverityEnumWarning                    TransferMessageSeverityEnum = "WARNING"
	TransferMessageSeverityEnumError                      TransferMessageSeverityEnum = "ERROR"
)

// TransferMessage
// Represents a user facing message for a particular data transfer run.
type TransferMessage struct {
	MessageText *string                      `json:"messageText,omitempty"`
	MessageTime *string                      `json:"messageTime,omitempty"`
	Severity    *TransferMessageSeverityEnum `json:"severity,omitempty"`
}
