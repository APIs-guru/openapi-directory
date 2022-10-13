package shared

type SelfservicePermissions struct {
	ChangeComputeType  *ReconnectEnumEnum `json:"ChangeComputeType"`
	IncreaseVolumeSize *ReconnectEnumEnum `json:"IncreaseVolumeSize"`
	RebuildWorkspace   *ReconnectEnumEnum `json:"RebuildWorkspace"`
	RestartWorkspace   *ReconnectEnumEnum `json:"RestartWorkspace"`
	SwitchRunningMode  *ReconnectEnumEnum `json:"SwitchRunningMode"`
}
