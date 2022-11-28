package shared

// ExternalData
// Data hosted at an external location. The data is to be downloaded by Android Device Policy and verified against the hash.
type ExternalData struct {
	Sha256Hash *string `json:"sha256Hash,omitempty"`
	URL        *string `json:"url,omitempty"`
}
