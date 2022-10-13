package shared

type InternalAppSharingArtifact struct {
	CertificateFingerprint *string `json:"certificateFingerprint"`
	DownloadURL            *string `json:"downloadUrl"`
	Sha256                 *string `json:"sha256"`
}
