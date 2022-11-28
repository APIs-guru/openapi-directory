package shared

// AwsRedshiftClusterHsmStatus
// Information about whether an Amazon Redshift cluster finished applying any hardware changes to security module (HSM) settings that were specified in a modify cluster command.
type AwsRedshiftClusterHsmStatus struct {
	HsmClientCertificateIdentifier *string `json:"HsmClientCertificateIdentifier,omitempty"`
	HsmConfigurationIdentifier     *string `json:"HsmConfigurationIdentifier,omitempty"`
	Status                         *string `json:"Status,omitempty"`
}
