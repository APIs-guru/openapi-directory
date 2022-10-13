package shared

type GetDistributionsRequest struct {
	DistributionName *string `json:"distributionName"`
	PageToken        *string `json:"pageToken"`
}
