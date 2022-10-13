package shared

type DetectModerationLabelsResponse struct {
	HumanLoopActivationOutput *HumanLoopActivationOutput `json:"HumanLoopActivationOutput"`
	ModerationLabels          []ModerationLabel          `json:"ModerationLabels"`
	ModerationModelVersion    *string                    `json:"ModerationModelVersion"`
}
