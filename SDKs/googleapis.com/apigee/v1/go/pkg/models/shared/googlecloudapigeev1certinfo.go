package shared

// GoogleCloudApigeeV1CertInfo
// X.509 certificate as defined in RFC 5280.
type GoogleCloudApigeeV1CertInfo struct {
	BasicConstraints        *string  `json:"basicConstraints,omitempty"`
	ExpiryDate              *string  `json:"expiryDate,omitempty"`
	IsValid                 *string  `json:"isValid,omitempty"`
	Issuer                  *string  `json:"issuer,omitempty"`
	PublicKey               *string  `json:"publicKey,omitempty"`
	SerialNumber            *string  `json:"serialNumber,omitempty"`
	SigAlgName              *string  `json:"sigAlgName,omitempty"`
	Subject                 *string  `json:"subject,omitempty"`
	SubjectAlternativeNames []string `json:"subjectAlternativeNames,omitempty"`
	ValidFrom               *string  `json:"validFrom,omitempty"`
	Version                 *int32   `json:"version,omitempty"`
}
