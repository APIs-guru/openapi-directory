package shared



type SlotValueSelectionSetting struct {
    RegexFilter *SlotValueRegexFilter `json:"regexFilter,omitempty"`
    ResolutionStrategy SlotValueResolutionStrategyEnum `json:"resolutionStrategy"`
    
}

