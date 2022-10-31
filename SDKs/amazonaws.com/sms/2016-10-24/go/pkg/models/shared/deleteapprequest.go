package shared

type DeleteAppRequest struct {
	AppID                   *string `json:"appId,omitempty"`
	ForceStopAppReplication *bool   `json:"forceStopAppReplication,omitempty"`
	ForceTerminateApp       *bool   `json:"forceTerminateApp,omitempty"`
}
