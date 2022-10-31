package shared



type SelfservicePermissions struct {
    ChangeComputeType *ReconnectEnumEnum `json:"ChangeComputeType,omitempty"`
    IncreaseVolumeSize *ReconnectEnumEnum `json:"IncreaseVolumeSize,omitempty"`
    RebuildWorkspace *ReconnectEnumEnum `json:"RebuildWorkspace,omitempty"`
    RestartWorkspace *ReconnectEnumEnum `json:"RestartWorkspace,omitempty"`
    SwitchRunningMode *ReconnectEnumEnum `json:"SwitchRunningMode,omitempty"`
    
}

