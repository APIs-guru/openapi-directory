package shared



type Deployment struct {
    AppID *string `json:"AppId,omitempty"`
    Command *DeploymentCommand `json:"Command,omitempty"`
    Comment *string `json:"Comment,omitempty"`
    CompletedAt *string `json:"CompletedAt,omitempty"`
    CreatedAt *string `json:"CreatedAt,omitempty"`
    CustomJSON *string `json:"CustomJson,omitempty"`
    DeploymentID *string `json:"DeploymentId,omitempty"`
    Duration *int64 `json:"Duration,omitempty"`
    IamUserArn *string `json:"IamUserArn,omitempty"`
    InstanceIds []string `json:"InstanceIds,omitempty"`
    StackID *string `json:"StackId,omitempty"`
    Status *string `json:"Status,omitempty"`
    
}

