package shared

type Deployment struct {
	AppID        *string            `json:"AppId"`
	Command      *DeploymentCommand `json:"Command"`
	Comment      *string            `json:"Comment"`
	CompletedAt  *string            `json:"CompletedAt"`
	CreatedAt    *string            `json:"CreatedAt"`
	CustomJSON   *string            `json:"CustomJson"`
	DeploymentID *string            `json:"DeploymentId"`
	Duration     *int64             `json:"Duration"`
	IamUserArn   *string            `json:"IamUserArn"`
	InstanceIds  []string           `json:"InstanceIds"`
	StackID      *string            `json:"StackId"`
	Status       *string            `json:"Status"`
}
