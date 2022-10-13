package shared

type GetCertificatesRequest struct {
	CertificateName           *string                 `json:"certificateName"`
	CertificateStatuses       []CertificateStatusEnum `json:"certificateStatuses"`
	IncludeCertificateDetails *bool                   `json:"includeCertificateDetails"`
}
