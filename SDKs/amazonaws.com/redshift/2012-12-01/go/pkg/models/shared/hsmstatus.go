package shared

// HsmStatus
// Describes the status of changes to HSM settings.
type HsmStatus struct {
	HsmClientCertificateIdentifier *string
	HsmConfigurationIdentifier     *string
	Status                         *string
}
