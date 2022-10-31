package shared




type TransferMessageSeverityEnum string

const (
    TransferMessageSeverityEnumMessageSeverityUnspecified TransferMessageSeverityEnum = "MESSAGE_SEVERITY_UNSPECIFIED"
TransferMessageSeverityEnumInfo TransferMessageSeverityEnum = "INFO"
TransferMessageSeverityEnumWarning TransferMessageSeverityEnum = "WARNING"
TransferMessageSeverityEnumError TransferMessageSeverityEnum = "ERROR"
)


type TransferMessage struct {
    MessageText *string `json:"messageText,omitempty"`
    MessageTime *string `json:"messageTime,omitempty"`
    Severity *TransferMessageSeverityEnum `json:"severity,omitempty"`
    
}

