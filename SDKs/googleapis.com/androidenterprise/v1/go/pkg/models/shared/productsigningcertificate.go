package shared



type ProductSigningCertificate struct {
    CertificateHashSha1 *string `json:"certificateHashSha1,omitempty"`
    CertificateHashSha256 *string `json:"certificateHashSha256,omitempty"`
    
}

