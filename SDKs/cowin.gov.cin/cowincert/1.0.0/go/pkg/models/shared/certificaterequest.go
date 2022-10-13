package shared

type CertificateRequest struct {
	BeneficiaryID *string `json:"beneficiaryId"`
	Mobile        *string `json:"mobile"`
}
