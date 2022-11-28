package shared

// AmpURL
// AMP URL response for a requested URL.
type AmpURL struct {
	AmpURL      *string `json:"ampUrl,omitempty"`
	CdnAmpURL   *string `json:"cdnAmpUrl,omitempty"`
	OriginalURL *string `json:"originalUrl,omitempty"`
}
