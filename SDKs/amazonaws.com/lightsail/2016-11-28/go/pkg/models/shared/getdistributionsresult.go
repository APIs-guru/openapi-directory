package shared

type GetDistributionsResult struct {
	Distributions []LightsailDistribution `json:"distributions,omitempty"`
	NextPageToken *string                 `json:"nextPageToken,omitempty"`
}
