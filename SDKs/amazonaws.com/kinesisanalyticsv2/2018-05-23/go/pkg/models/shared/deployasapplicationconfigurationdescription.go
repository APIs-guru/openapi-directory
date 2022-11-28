package shared

// DeployAsApplicationConfigurationDescription
// The configuration information required to deploy an Amazon Data Analytics Studio notebook as an application with durable state.
type DeployAsApplicationConfigurationDescription struct {
	S3ContentLocationDescription S3ContentBaseLocationDescription `json:"S3ContentLocationDescription"`
}
