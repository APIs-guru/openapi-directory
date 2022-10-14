package shared

type AffiliateVideoSearchResponse struct {
	AutoCorrections *AutoCorrections `json:"auto_corrections,omitempty"`
	Videos          []AffiliateVideo `json:"videos,omitempty"`
}
