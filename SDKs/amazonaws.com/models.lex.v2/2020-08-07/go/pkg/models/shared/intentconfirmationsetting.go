package shared



type IntentConfirmationSetting struct {
    Active *bool `json:"active,omitempty"`
    DeclinationResponse ResponseSpecification `json:"declinationResponse"`
    PromptSpecification PromptSpecification `json:"promptSpecification"`
    
}

