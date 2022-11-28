package shared

type XMLFormatSchemaSignatureKeyInfo struct {
	X509Data *interface{}
}

type XMLFormatSchemaSignature struct {
	KeyInfo        XMLFormatSchemaSignatureKeyInfo
	SignatureValue *interface{}
	SignedInfo     *interface{}
}

type XMLFormatSchema struct {
	CertificateData []interface{}
	Signature       XMLFormatSchemaSignature
}
