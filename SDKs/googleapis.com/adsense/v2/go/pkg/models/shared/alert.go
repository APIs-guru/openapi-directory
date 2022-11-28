package shared

type AlertSeverityEnum string

const (
	AlertSeverityEnumSeverityUnspecified AlertSeverityEnum = "SEVERITY_UNSPECIFIED"
	AlertSeverityEnumInfo                AlertSeverityEnum = "INFO"
	AlertSeverityEnumWarning             AlertSeverityEnum = "WARNING"
	AlertSeverityEnumSevere              AlertSeverityEnum = "SEVERE"
)

// Alert
// Representation of an alert.
type Alert struct {
	Message  *string            `json:"message,omitempty"`
	Name     *string            `json:"name,omitempty"`
	Severity *AlertSeverityEnum `json:"severity,omitempty"`
	Type     *string            `json:"type,omitempty"`
}
