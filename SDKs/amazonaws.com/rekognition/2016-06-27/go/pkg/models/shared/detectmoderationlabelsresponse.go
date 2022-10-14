package shared

type DetectModerationLabelsResponse struct {
	HumanLoopActivationOutput *HumanLoopActivationOutput `json:"HumanLoopActivationOutput,omitempty"`
	ModerationLabels          []ModerationLabel          `json:"ModerationLabels,omitempty"`
	ModerationModelVersion    *string                    `json:"ModerationModelVersion,omitempty"`
}
