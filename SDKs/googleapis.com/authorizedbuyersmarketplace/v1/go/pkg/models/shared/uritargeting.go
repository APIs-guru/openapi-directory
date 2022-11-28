package shared

// URITargeting
// Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.
type URITargeting struct {
	ExcludedUris []string `json:"excludedUris,omitempty"`
	TargetedUris []string `json:"targetedUris,omitempty"`
}
