package shared

type AffiliateVideoSearchResponse struct {
	AutoCorrections *AutoCorrections `json:"auto_corrections"`
	Videos          []AffiliateVideo `json:"videos"`
}
