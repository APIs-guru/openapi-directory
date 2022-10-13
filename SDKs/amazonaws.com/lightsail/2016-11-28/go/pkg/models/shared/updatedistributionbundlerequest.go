package shared

type UpdateDistributionBundleRequest struct {
	BundleID         *string `json:"bundleId"`
	DistributionName *string `json:"distributionName"`
}
