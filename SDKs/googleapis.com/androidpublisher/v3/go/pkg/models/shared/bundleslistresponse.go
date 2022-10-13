package shared

type BundlesListResponse struct {
	Bundles []Bundle `json:"bundles"`
	Kind    *string  `json:"kind"`
}
