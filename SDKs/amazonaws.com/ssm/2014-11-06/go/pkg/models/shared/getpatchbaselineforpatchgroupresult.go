package shared



type GetPatchBaselineForPatchGroupResult struct {
    BaselineID *string `json:"BaselineId,omitempty"`
    OperatingSystem *OperatingSystemEnum `json:"OperatingSystem,omitempty"`
    PatchGroup *string `json:"PatchGroup,omitempty"`
    
}

