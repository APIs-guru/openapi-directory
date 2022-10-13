package shared

type DeleteAppRequest struct {
	AppID                   *string `json:"appId"`
	ForceStopAppReplication *bool   `json:"forceStopAppReplication"`
	ForceTerminateApp       *bool   `json:"forceTerminateApp"`
}
