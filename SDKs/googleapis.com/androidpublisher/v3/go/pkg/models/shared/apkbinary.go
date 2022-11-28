package shared

// ApkBinary
// Represents the binary payload of an APK.
type ApkBinary struct {
	Sha1   *string `json:"sha1,omitempty"`
	Sha256 *string `json:"sha256,omitempty"`
}
