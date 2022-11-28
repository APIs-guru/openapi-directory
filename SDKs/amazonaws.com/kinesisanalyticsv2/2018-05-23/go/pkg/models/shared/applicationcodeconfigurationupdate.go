package shared

// ApplicationCodeConfigurationUpdate
// Describes code configuration updates for an application. This is supported for a Flink-based Kinesis Data Analytics application or a SQL-based Kinesis Data Analytics application.
type ApplicationCodeConfigurationUpdate struct {
	CodeContentTypeUpdate *CodeContentTypeEnum `json:"CodeContentTypeUpdate,omitempty"`
	CodeContentUpdate     *CodeContentUpdate   `json:"CodeContentUpdate,omitempty"`
}
