package shared

// InternalAppSharingArtifact
// An artifact resource which gets created when uploading an APK or Android App Bundle through internal app sharing.
type InternalAppSharingArtifact struct {
	CertificateFingerprint *string `json:"certificateFingerprint,omitempty"`
	DownloadURL            *string `json:"downloadUrl,omitempty"`
	Sha256                 *string `json:"sha256,omitempty"`
}
