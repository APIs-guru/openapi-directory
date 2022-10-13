package shared

type CreateCertificateResult struct {
	Certificate *CertificateSummary `json:"certificate"`
	Operations  []Operation         `json:"operations"`
}
