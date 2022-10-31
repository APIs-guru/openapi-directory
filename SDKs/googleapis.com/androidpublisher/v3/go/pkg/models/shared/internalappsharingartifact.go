package shared



type InternalAppSharingArtifact struct {
    CertificateFingerprint *string `json:"certificateFingerprint,omitempty"`
    DownloadURL *string `json:"downloadUrl,omitempty"`
    Sha256 *string `json:"sha256,omitempty"`
    
}

