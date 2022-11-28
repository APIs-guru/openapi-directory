package shared

// Slot
// Identifies the version of a specific slot.
type Slot struct {
	DefaultValueSpec       *SlotDefaultValueSpec   `json:"defaultValueSpec,omitempty"`
	Description            *string                 `json:"description,omitempty"`
	Name                   string                  `json:"name"`
	ObfuscationSetting     *ObfuscationSettingEnum `json:"obfuscationSetting,omitempty"`
	Priority               *int64                  `json:"priority,omitempty"`
	ResponseCard           *string                 `json:"responseCard,omitempty"`
	SampleUtterances       []string                `json:"sampleUtterances,omitempty"`
	SlotConstraint         SlotConstraintEnum      `json:"slotConstraint"`
	SlotType               *string                 `json:"slotType,omitempty"`
	SlotTypeVersion        *string                 `json:"slotTypeVersion,omitempty"`
	ValueElicitationPrompt *Prompt                 `json:"valueElicitationPrompt,omitempty"`
}
