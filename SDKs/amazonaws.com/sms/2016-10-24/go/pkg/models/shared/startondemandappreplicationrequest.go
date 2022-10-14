package shared

type StartOnDemandAppReplicationRequest struct {
	AppID       string  `json:"appId"`
	Description *string `json:"description,omitempty"`
}
