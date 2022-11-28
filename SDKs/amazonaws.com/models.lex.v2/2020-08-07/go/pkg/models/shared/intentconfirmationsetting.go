package shared

// IntentConfirmationSetting
// Provides a prompt for making sure that the user is ready for the intent to be fulfilled.
type IntentConfirmationSetting struct {
	Active              *bool                 `json:"active,omitempty"`
	DeclinationResponse ResponseSpecification `json:"declinationResponse"`
	PromptSpecification PromptSpecification   `json:"promptSpecification"`
}
