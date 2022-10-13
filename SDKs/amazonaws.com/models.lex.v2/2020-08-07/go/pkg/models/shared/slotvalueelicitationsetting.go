package shared

type SlotValueElicitationSetting struct {
	DefaultValueSpecification    *SlotDefaultValueSpecification `json:"defaultValueSpecification"`
	PromptSpecification          *PromptSpecification           `json:"promptSpecification"`
	SampleUtterances             []SampleUtterance              `json:"sampleUtterances"`
	SlotConstraint               SlotConstraintEnum             `json:"slotConstraint"`
	WaitAndContinueSpecification *WaitAndContinueSpecification  `json:"waitAndContinueSpecification"`
}
