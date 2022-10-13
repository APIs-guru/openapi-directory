package shared

type SignatureInfo struct {
	CustomerKmsKeyVersion *string `json:"customerKmsKeyVersion"`
	GooglePublicKeyPem    *string `json:"googlePublicKeyPem"`
	Signature             *string `json:"signature"`
}
