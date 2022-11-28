package shared

// SlotValueSelectionSetting
// Contains settings used by Amazon Lex to select a slot value.
type SlotValueSelectionSetting struct {
	RegexFilter        *SlotValueRegexFilter           `json:"regexFilter,omitempty"`
	ResolutionStrategy SlotValueResolutionStrategyEnum `json:"resolutionStrategy"`
}
