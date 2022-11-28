package shared

// SelfservicePermissions
// Describes the self-service permissions for a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.
type SelfservicePermissions struct {
	ChangeComputeType  *ReconnectEnumEnum `json:"ChangeComputeType,omitempty"`
	IncreaseVolumeSize *ReconnectEnumEnum `json:"IncreaseVolumeSize,omitempty"`
	RebuildWorkspace   *ReconnectEnumEnum `json:"RebuildWorkspace,omitempty"`
	RestartWorkspace   *ReconnectEnumEnum `json:"RestartWorkspace,omitempty"`
	SwitchRunningMode  *ReconnectEnumEnum `json:"SwitchRunningMode,omitempty"`
}
