package shared

type GetCertificatesResult struct {
	Certificates []CertificateSummary `json:"certificates"`
}
