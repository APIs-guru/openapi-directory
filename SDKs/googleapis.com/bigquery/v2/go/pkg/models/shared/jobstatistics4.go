package shared

type JobStatistics4 struct {
	DestinationURIFileCounts []string `json:"destinationUriFileCounts"`
	InputBytes               *string  `json:"inputBytes"`
}
