package shared

// SignatureInfo
// Information about the digital signature of the resource.
type SignatureInfo struct {
	CustomerKmsKeyVersion *string `json:"customerKmsKeyVersion,omitempty"`
	GooglePublicKeyPem    *string `json:"googlePublicKeyPem,omitempty"`
	Signature             *string `json:"signature,omitempty"`
}
