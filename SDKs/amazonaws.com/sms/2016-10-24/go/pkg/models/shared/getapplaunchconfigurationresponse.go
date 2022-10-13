package shared

type GetAppLaunchConfigurationResponse struct {
	AppID                           *string                          `json:"appId"`
	AutoLaunch                      *bool                            `json:"autoLaunch"`
	RoleName                        *string                          `json:"roleName"`
	ServerGroupLaunchConfigurations []ServerGroupLaunchConfiguration `json:"serverGroupLaunchConfigurations"`
}
