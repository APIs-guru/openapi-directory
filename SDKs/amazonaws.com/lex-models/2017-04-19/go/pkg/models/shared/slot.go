package shared

type Slot struct {
	DefaultValueSpec       *SlotDefaultValueSpec   `json:"defaultValueSpec"`
	Description            *string                 `json:"description"`
	Name                   string                  `json:"name"`
	ObfuscationSetting     *ObfuscationSettingEnum `json:"obfuscationSetting"`
	Priority               *int64                  `json:"priority"`
	ResponseCard           *string                 `json:"responseCard"`
	SampleUtterances       []string                `json:"sampleUtterances"`
	SlotConstraint         SlotConstraintEnum      `json:"slotConstraint"`
	SlotType               *string                 `json:"slotType"`
	SlotTypeVersion        *string                 `json:"slotTypeVersion"`
	ValueElicitationPrompt *Prompt                 `json:"valueElicitationPrompt"`
}
