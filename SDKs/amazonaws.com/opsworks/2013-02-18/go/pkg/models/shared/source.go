package shared



type Source struct {
    Password *string `json:"Password,omitempty"`
    Revision *string `json:"Revision,omitempty"`
    SSHKey *string `json:"SshKey,omitempty"`
    Type *SourceTypeEnum `json:"Type,omitempty"`
    URL *string `json:"Url,omitempty"`
    Username *string `json:"Username,omitempty"`
    
}

