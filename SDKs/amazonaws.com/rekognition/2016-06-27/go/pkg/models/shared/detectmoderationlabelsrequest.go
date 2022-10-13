package shared

type DetectModerationLabelsRequest struct {
	HumanLoopConfig *HumanLoopConfig `json:"HumanLoopConfig"`
	Image           Image            `json:"Image"`
	MinConfidence   *float32         `json:"MinConfidence"`
}
