package shared

type AlertSeverityEnum string

const (
	AlertSeverityEnumSeverityUnspecified AlertSeverityEnum = "SEVERITY_UNSPECIFIED"
	AlertSeverityEnumInfo                AlertSeverityEnum = "INFO"
	AlertSeverityEnumWarning             AlertSeverityEnum = "WARNING"
	AlertSeverityEnumSevere              AlertSeverityEnum = "SEVERE"
)

type Alert struct {
	Message  *string            `json:"message"`
	Name     *string            `json:"name"`
	Severity *AlertSeverityEnum `json:"severity"`
	Type     *string            `json:"type"`
}
