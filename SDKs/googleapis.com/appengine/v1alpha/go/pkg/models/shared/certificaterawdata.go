package shared



type CertificateRawData struct {
    PrivateKey *string `json:"privateKey,omitempty"`
    PublicCertificate *string `json:"publicCertificate,omitempty"`
    
}

