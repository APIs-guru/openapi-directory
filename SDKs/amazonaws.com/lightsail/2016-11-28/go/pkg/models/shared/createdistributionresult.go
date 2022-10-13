package shared

type CreateDistributionResult struct {
	Distribution *LightsailDistribution `json:"distribution"`
	Operation    *Operation             `json:"operation"`
}
