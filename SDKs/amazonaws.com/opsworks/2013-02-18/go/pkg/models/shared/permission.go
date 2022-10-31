package shared



type Permission struct {
    AllowSSH *bool `json:"AllowSsh,omitempty"`
    AllowSudo *bool `json:"AllowSudo,omitempty"`
    IamUserArn *string `json:"IamUserArn,omitempty"`
    Level *string `json:"Level,omitempty"`
    StackID *string `json:"StackId,omitempty"`
    
}

