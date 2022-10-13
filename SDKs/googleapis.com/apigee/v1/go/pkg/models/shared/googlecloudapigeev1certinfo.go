package shared

type GoogleCloudApigeeV1CertInfo struct {
	BasicConstraints        *string  `json:"basicConstraints"`
	ExpiryDate              *string  `json:"expiryDate"`
	IsValid                 *string  `json:"isValid"`
	Issuer                  *string  `json:"issuer"`
	PublicKey               *string  `json:"publicKey"`
	SerialNumber            *string  `json:"serialNumber"`
	SigAlgName              *string  `json:"sigAlgName"`
	Subject                 *string  `json:"subject"`
	SubjectAlternativeNames []string `json:"subjectAlternativeNames"`
	ValidFrom               *string  `json:"validFrom"`
	Version                 *int32   `json:"version"`
}
