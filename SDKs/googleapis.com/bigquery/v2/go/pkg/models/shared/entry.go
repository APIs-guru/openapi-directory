package shared

type Entry struct {
	ItemCount      *string `json:"itemCount,omitempty"`
	PredictedLabel *string `json:"predictedLabel,omitempty"`
}
