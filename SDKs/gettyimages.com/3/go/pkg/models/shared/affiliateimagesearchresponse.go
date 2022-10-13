package shared

type AffiliateImageSearchResponse struct {
	AutoCorrections *AutoCorrections `json:"auto_corrections"`
	Images          []AffiliateImage `json:"images"`
}
