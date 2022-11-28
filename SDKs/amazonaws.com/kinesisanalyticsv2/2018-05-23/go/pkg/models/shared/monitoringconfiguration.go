package shared

// MonitoringConfiguration
// Describes configuration parameters for Amazon CloudWatch logging for an application. For more information about CloudWatch logging, see <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/java/monitoring-overview.html">Monitoring</a>.
type MonitoringConfiguration struct {
	ConfigurationType ConfigurationTypeEnum `json:"ConfigurationType"`
	LogLevel          *LogLevelEnum         `json:"LogLevel,omitempty"`
	MetricsLevel      *MetricsLevelEnum     `json:"MetricsLevel,omitempty"`
}
