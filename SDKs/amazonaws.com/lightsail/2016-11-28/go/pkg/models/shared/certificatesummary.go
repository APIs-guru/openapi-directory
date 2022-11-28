package shared

// CertificateSummary
// Describes an Amazon Lightsail SSL/TLS certificate.
type CertificateSummary struct {
	CertificateArn    *string      `json:"certificateArn,omitempty"`
	CertificateDetail *Certificate `json:"certificateDetail,omitempty"`
	CertificateName   *string      `json:"certificateName,omitempty"`
	DomainName        *string      `json:"domainName,omitempty"`
	Tags              []Tag        `json:"tags,omitempty"`
}
