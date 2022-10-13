package shared

type SparkStatistics struct {
	Endpoints        map[string]string `json:"endpoints"`
	LoggingInfo      *SparkLoggingInfo `json:"logging_info"`
	SparkJobID       *string           `json:"spark_job_id"`
	SparkJobLocation *string           `json:"spark_job_location"`
}
