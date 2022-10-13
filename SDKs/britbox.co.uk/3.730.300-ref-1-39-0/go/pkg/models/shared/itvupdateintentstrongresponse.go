package shared

type ItvUpdateIntentStrongResponse struct {
	ClientSecret *string `json:"clientSecret"`
	IntentID     *string `json:"intentId"`
	IntentType   *string `json:"intentType"`
	Status       *string `json:"status"`
}
