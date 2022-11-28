package shared

// FollowUpPrompt
// A prompt for additional activity after an intent is fulfilled. For example, after the <code>OrderPizza</code> intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.
type FollowUpPrompt struct {
	Prompt             Prompt    `json:"prompt"`
	RejectionStatement Statement `json:"rejectionStatement"`
}
