package shared

type AwsRedshiftClusterHsmStatus struct {
	HsmClientCertificateIdentifier *string `json:"HsmClientCertificateIdentifier"`
	HsmConfigurationIdentifier     *string `json:"HsmConfigurationIdentifier"`
	Status                         *string `json:"Status"`
}
