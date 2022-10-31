package shared



type SslSettings struct {
    CertificateID *string `json:"certificateId,omitempty"`
    IsManagedCertificate *bool `json:"isManagedCertificate,omitempty"`
    
}

