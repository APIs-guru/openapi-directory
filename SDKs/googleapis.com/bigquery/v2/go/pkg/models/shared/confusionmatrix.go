package shared

type ConfusionMatrix struct {
	ConfidenceThreshold *float64 `json:"confidenceThreshold"`
	Rows                []Row    `json:"rows"`
}
