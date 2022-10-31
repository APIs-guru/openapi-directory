package shared



type PatchBaselineIdentity struct {
    BaselineDescription *string `json:"BaselineDescription,omitempty"`
    BaselineID *string `json:"BaselineId,omitempty"`
    BaselineName *string `json:"BaselineName,omitempty"`
    DefaultBaseline *bool `json:"DefaultBaseline,omitempty"`
    OperatingSystem *OperatingSystemEnum `json:"OperatingSystem,omitempty"`
    
}

