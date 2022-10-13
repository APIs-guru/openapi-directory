package shared

type IntentConfirmationSetting struct {
	Active              *bool                 `json:"active"`
	DeclinationResponse ResponseSpecification `json:"declinationResponse"`
	PromptSpecification PromptSpecification   `json:"promptSpecification"`
}
