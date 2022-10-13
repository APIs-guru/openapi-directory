package shared

type KeyedAppStateSeverityEnum string

const (
	KeyedAppStateSeverityEnumSeverityUnknown KeyedAppStateSeverityEnum = "severityUnknown"
	KeyedAppStateSeverityEnumSeverityInfo    KeyedAppStateSeverityEnum = "severityInfo"
	KeyedAppStateSeverityEnumSeverityError   KeyedAppStateSeverityEnum = "severityError"
)

type KeyedAppState struct {
	Data                 *string                    `json:"data"`
	Key                  *string                    `json:"key"`
	Message              *string                    `json:"message"`
	Severity             *KeyedAppStateSeverityEnum `json:"severity"`
	StateTimestampMillis *string                    `json:"stateTimestampMillis"`
}
