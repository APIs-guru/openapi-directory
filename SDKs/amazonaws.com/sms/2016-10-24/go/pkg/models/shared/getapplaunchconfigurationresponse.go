package shared



type GetAppLaunchConfigurationResponse struct {
    AppID *string `json:"appId,omitempty"`
    AutoLaunch *bool `json:"autoLaunch,omitempty"`
    RoleName *string `json:"roleName,omitempty"`
    ServerGroupLaunchConfigurations []ServerGroupLaunchConfiguration `json:"serverGroupLaunchConfigurations,omitempty"`
    
}

