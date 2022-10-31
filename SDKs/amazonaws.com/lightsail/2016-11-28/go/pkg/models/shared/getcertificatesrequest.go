package shared

type GetCertificatesRequest struct {
	CertificateName           *string                 `json:"certificateName,omitempty"`
	CertificateStatuses       []CertificateStatusEnum `json:"certificateStatuses,omitempty"`
	IncludeCertificateDetails *bool                   `json:"includeCertificateDetails,omitempty"`
}
