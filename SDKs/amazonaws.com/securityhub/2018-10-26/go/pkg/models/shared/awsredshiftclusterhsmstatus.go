package shared

type AwsRedshiftClusterHsmStatus struct {
	HsmClientCertificateIdentifier *string `json:"HsmClientCertificateIdentifier,omitempty"`
	HsmConfigurationIdentifier     *string `json:"HsmConfigurationIdentifier,omitempty"`
	Status                         *string `json:"Status,omitempty"`
}
