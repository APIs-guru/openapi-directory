package shared

type JobStatistics4 struct {
	DestinationURIFileCounts []string `json:"destinationUriFileCounts,omitempty"`
	InputBytes               *string  `json:"inputBytes,omitempty"`
}
