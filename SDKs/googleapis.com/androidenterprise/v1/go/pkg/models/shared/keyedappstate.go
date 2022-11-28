package shared

type KeyedAppStateSeverityEnum string

const (
	KeyedAppStateSeverityEnumSeverityUnknown KeyedAppStateSeverityEnum = "severityUnknown"
	KeyedAppStateSeverityEnumSeverityInfo    KeyedAppStateSeverityEnum = "severityInfo"
	KeyedAppStateSeverityEnumSeverityError   KeyedAppStateSeverityEnum = "severityError"
)

// KeyedAppState
// Represents a keyed app state containing a key, timestamp, severity level, optional description, and optional data.
type KeyedAppState struct {
	Data                 *string                    `json:"data,omitempty"`
	Key                  *string                    `json:"key,omitempty"`
	Message              *string                    `json:"message,omitempty"`
	Severity             *KeyedAppStateSeverityEnum `json:"severity,omitempty"`
	StateTimestampMillis *string                    `json:"stateTimestampMillis,omitempty"`
}
