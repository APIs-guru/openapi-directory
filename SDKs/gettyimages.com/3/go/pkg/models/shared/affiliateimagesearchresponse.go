package shared

type AffiliateImageSearchResponse struct {
	AutoCorrections *AutoCorrections `json:"auto_corrections,omitempty"`
	Images          []AffiliateImage `json:"images,omitempty"`
}
