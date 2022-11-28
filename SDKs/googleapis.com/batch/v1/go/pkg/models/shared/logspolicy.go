package shared

type LogsPolicyDestinationEnum string

const (
	LogsPolicyDestinationEnumDestinationUnspecified LogsPolicyDestinationEnum = "DESTINATION_UNSPECIFIED"
	LogsPolicyDestinationEnumCloudLogging           LogsPolicyDestinationEnum = "CLOUD_LOGGING"
	LogsPolicyDestinationEnumPath                   LogsPolicyDestinationEnum = "PATH"
)

// LogsPolicy
// LogsPolicy describes how outputs from a Job's Tasks (stdout/stderr) will be preserved.
type LogsPolicy struct {
	Destination *LogsPolicyDestinationEnum `json:"destination,omitempty"`
	LogsPath    *string                    `json:"logsPath,omitempty"`
}
