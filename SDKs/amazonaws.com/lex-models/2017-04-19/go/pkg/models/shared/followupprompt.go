package shared

type FollowUpPrompt struct {
	Prompt             Prompt    `json:"prompt"`
	RejectionStatement Statement `json:"rejectionStatement"`
}
