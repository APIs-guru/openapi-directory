package shared

// URLTargeting
// Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction and AdX Preferred Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.
type URLTargeting struct {
	ExcludedUrls []string `json:"excludedUrls,omitempty"`
	TargetedUrls []string `json:"targetedUrls,omitempty"`
}
