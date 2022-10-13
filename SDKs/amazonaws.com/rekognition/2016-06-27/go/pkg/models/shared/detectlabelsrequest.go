package shared

type DetectLabelsRequest struct {
	Image         Image    `json:"Image"`
	MaxLabels     *int64   `json:"MaxLabels"`
	MinConfidence *float32 `json:"MinConfidence"`
}
