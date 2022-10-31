package shared



type UpdatePermissionSetRequest struct {
    Description *string `json:"Description,omitempty"`
    InstanceArn string `json:"InstanceArn"`
    PermissionSetArn string `json:"PermissionSetArn"`
    RelayState *string `json:"RelayState,omitempty"`
    SessionDuration *string `json:"SessionDuration,omitempty"`
    
}

