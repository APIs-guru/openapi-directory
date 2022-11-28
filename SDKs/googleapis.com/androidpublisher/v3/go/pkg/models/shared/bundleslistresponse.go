package shared

// BundlesListResponse
// Response listing all app bundles.
type BundlesListResponse struct {
	Bundles []Bundle `json:"bundles,omitempty"`
	Kind    *string  `json:"kind,omitempty"`
}
