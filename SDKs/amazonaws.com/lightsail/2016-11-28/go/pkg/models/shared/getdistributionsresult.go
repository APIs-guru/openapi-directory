package shared

type GetDistributionsResult struct {
	Distributions []LightsailDistribution `json:"distributions"`
	NextPageToken *string                 `json:"nextPageToken"`
}
