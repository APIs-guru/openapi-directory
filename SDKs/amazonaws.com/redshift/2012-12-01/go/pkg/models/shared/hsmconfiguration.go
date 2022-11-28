package shared

// HsmConfiguration
// Returns information about an HSM configuration, which is an object that describes to Amazon Redshift clusters the information they require to connect to an HSM where they can store database encryption keys.
type HsmConfiguration struct {
	Description                *string
	HsmConfigurationIdentifier *string
	HsmIPAddress               *string
	HsmPartitionName           *string
	Tags                       []Tag
}
