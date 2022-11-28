package shared

// DeployAsApplicationConfigurationUpdate
// Updates to the configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state..
type DeployAsApplicationConfigurationUpdate struct {
	S3ContentLocationUpdate S3ContentBaseLocationUpdate `json:"S3ContentLocationUpdate"`
}
