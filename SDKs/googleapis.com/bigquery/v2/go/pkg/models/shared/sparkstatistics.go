package shared



type SparkStatistics struct {
    Endpoints map[string]string `json:"endpoints,omitempty"`
    LoggingInfo *SparkLoggingInfo `json:"logging_info,omitempty"`
    SparkJobID *string `json:"spark_job_id,omitempty"`
    SparkJobLocation *string `json:"spark_job_location,omitempty"`
    
}

