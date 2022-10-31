package shared

type ItvUpdateIntentStrongResponse struct {
	ClientSecret *string `json:"clientSecret,omitempty"`
	IntentID     *string `json:"intentId,omitempty"`
	IntentType   *string `json:"intentType,omitempty"`
	Status       *string `json:"status,omitempty"`
}
