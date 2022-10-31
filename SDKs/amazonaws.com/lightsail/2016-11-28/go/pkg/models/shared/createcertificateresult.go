package shared



type CreateCertificateResult struct {
    Certificate *CertificateSummary `json:"certificate,omitempty"`
    Operations []Operation `json:"operations,omitempty"`
    
}

