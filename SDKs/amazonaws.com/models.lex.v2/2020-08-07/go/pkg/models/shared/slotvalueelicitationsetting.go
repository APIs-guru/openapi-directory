package shared



type SlotValueElicitationSetting struct {
    DefaultValueSpecification *SlotDefaultValueSpecification `json:"defaultValueSpecification,omitempty"`
    PromptSpecification *PromptSpecification `json:"promptSpecification,omitempty"`
    SampleUtterances []SampleUtterance `json:"sampleUtterances,omitempty"`
    SlotConstraint SlotConstraintEnum `json:"slotConstraint"`
    WaitAndContinueSpecification *WaitAndContinueSpecification `json:"waitAndContinueSpecification,omitempty"`
    
}

