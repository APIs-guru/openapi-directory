package shared

// ServerGroupLaunchConfiguration
// Launch configuration for a server group.
type ServerGroupLaunchConfiguration struct {
	LaunchOrder                *int64                      `json:"launchOrder,omitempty"`
	ServerGroupID              *string                     `json:"serverGroupId,omitempty"`
	ServerLaunchConfigurations []ServerLaunchConfiguration `json:"serverLaunchConfigurations,omitempty"`
}
