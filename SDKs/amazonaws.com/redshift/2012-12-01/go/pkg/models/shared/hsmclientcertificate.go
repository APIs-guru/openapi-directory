package shared

// HsmClientCertificate
// Returns information about an HSM client certificate. The certificate is stored in a secure Hardware Storage Module (HSM), and used by the Amazon Redshift cluster to encrypt data files.
type HsmClientCertificate struct {
	HsmClientCertificateIdentifier *string
	HsmClientCertificatePublicKey  *string
	Tags                           []Tag
}
