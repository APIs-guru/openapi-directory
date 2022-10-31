package shared



type ServerGroupLaunchConfiguration struct {
    LaunchOrder *int64 `json:"launchOrder,omitempty"`
    ServerGroupID *string `json:"serverGroupId,omitempty"`
    ServerLaunchConfigurations []ServerLaunchConfiguration `json:"serverLaunchConfigurations,omitempty"`
    
}

