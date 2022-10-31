package shared



type SecurityHubConfiguration struct {
    PublishClassificationFindings bool `json:"publishClassificationFindings"`
    PublishPolicyFindings bool `json:"publishPolicyFindings"`
    
}

