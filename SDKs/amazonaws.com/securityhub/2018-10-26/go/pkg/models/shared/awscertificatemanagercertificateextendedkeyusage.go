package shared

// AwsCertificateManagerCertificateExtendedKeyUsage
// Contains information about an extended key usage X.509 v3 extension object.
type AwsCertificateManagerCertificateExtendedKeyUsage struct {
	Name *string `json:"Name,omitempty"`
	OID  *string `json:"OId,omitempty"`
}
