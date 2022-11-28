package shared

// V2BrowserKeyRestrictions
// The HTTP referrers (websites) that are allowed to use the key.
type V2BrowserKeyRestrictions struct {
	AllowedReferrers []string `json:"allowedReferrers,omitempty"`
}
