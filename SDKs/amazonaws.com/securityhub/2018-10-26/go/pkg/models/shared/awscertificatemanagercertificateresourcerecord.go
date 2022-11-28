package shared

// AwsCertificateManagerCertificateResourceRecord
// Provides details about the CNAME record that is added to the DNS database for domain validation.
type AwsCertificateManagerCertificateResourceRecord struct {
	Name  *string `json:"Name,omitempty"`
	Type  *string `json:"Type,omitempty"`
	Value *string `json:"Value,omitempty"`
}
