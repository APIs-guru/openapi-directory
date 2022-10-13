package shared

type AmpURL struct {
	AmpURL      *string `json:"ampUrl"`
	CdnAmpURL   *string `json:"cdnAmpUrl"`
	OriginalURL *string `json:"originalUrl"`
}
