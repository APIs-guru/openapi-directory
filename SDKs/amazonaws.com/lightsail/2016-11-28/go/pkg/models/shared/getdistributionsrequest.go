package shared

type GetDistributionsRequest struct {
	DistributionName *string `json:"distributionName,omitempty"`
	PageToken        *string `json:"pageToken,omitempty"`
}
