package shared

// V2AndroidApplication
// Identifier of an Android application for key use.
type V2AndroidApplication struct {
	PackageName     *string `json:"packageName,omitempty"`
	Sha1Fingerprint *string `json:"sha1Fingerprint,omitempty"`
}
