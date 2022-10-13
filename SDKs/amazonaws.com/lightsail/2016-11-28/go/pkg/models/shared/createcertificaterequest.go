package shared

type CreateCertificateRequest struct {
	CertificateName         string   `json:"certificateName"`
	DomainName              string   `json:"domainName"`
	SubjectAlternativeNames []string `json:"subjectAlternativeNames"`
	Tags                    []Tag    `json:"tags"`
}
