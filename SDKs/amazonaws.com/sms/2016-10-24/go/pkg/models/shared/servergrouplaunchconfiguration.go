package shared

type ServerGroupLaunchConfiguration struct {
	LaunchOrder                *int64                      `json:"launchOrder"`
	ServerGroupID              *string                     `json:"serverGroupId"`
	ServerLaunchConfigurations []ServerLaunchConfiguration `json:"serverLaunchConfigurations"`
}
