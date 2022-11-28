package shared

type KeyedAppStateSeverityEnum string

const (
	KeyedAppStateSeverityEnumSeverityUnspecified KeyedAppStateSeverityEnum = "SEVERITY_UNSPECIFIED"
	KeyedAppStateSeverityEnumInfo                KeyedAppStateSeverityEnum = "INFO"
	KeyedAppStateSeverityEnumError               KeyedAppStateSeverityEnum = "ERROR"
)

// KeyedAppState
// Keyed app state reported by the app.
type KeyedAppState struct {
	CreateTime     *string                    `json:"createTime,omitempty"`
	Data           *string                    `json:"data,omitempty"`
	Key            *string                    `json:"key,omitempty"`
	LastUpdateTime *string                    `json:"lastUpdateTime,omitempty"`
	Message        *string                    `json:"message,omitempty"`
	Severity       *KeyedAppStateSeverityEnum `json:"severity,omitempty"`
}
