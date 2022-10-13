package shared

type CertificateSummary struct {
	CertificateArn    *string      `json:"certificateArn"`
	CertificateDetail *Certificate `json:"certificateDetail"`
	CertificateName   *string      `json:"certificateName"`
	DomainName        *string      `json:"domainName"`
	Tags              []Tag        `json:"tags"`
}
