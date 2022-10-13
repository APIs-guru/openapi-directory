package shared

type CreateDeploymentRequest struct {
	AppID       *string           `json:"AppId"`
	Command     DeploymentCommand `json:"Command"`
	Comment     *string           `json:"Comment"`
	CustomJSON  *string           `json:"CustomJson"`
	InstanceIds []string          `json:"InstanceIds"`
	LayerIds    []string          `json:"LayerIds"`
	StackID     string            `json:"StackId"`
}
