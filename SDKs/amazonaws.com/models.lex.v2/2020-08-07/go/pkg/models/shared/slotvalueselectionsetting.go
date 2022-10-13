package shared

type SlotValueSelectionSetting struct {
	RegexFilter        *SlotValueRegexFilter           `json:"regexFilter"`
	ResolutionStrategy SlotValueResolutionStrategyEnum `json:"resolutionStrategy"`
}
