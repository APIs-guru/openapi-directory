package shared



type SsmAutomation struct {
    DocumentName string `json:"documentName"`
    DocumentVersion *string `json:"documentVersion,omitempty"`
    Parameters map[string][]string `json:"parameters,omitempty"`
    RoleArn string `json:"roleArn"`
    TargetAccount *SsmTargetAccountEnum `json:"targetAccount,omitempty"`
    
}

