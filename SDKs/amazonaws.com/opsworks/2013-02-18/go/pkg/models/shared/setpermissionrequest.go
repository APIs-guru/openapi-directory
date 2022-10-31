package shared



type SetPermissionRequest struct {
    AllowSSH *bool `json:"AllowSsh,omitempty"`
    AllowSudo *bool `json:"AllowSudo,omitempty"`
    IamUserArn string `json:"IamUserArn"`
    Level *string `json:"Level,omitempty"`
    StackID string `json:"StackId"`
    
}

