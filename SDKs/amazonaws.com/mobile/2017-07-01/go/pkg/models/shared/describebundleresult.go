package shared

// DescribeBundleResult
//
//	Result structure contains the details of the bundle.
type DescribeBundleResult struct {
	Details *BundleDetails `json:"details,omitempty"`
}
