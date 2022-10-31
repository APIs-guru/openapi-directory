package shared



type AwsCodeBuildProjectSource struct {
    GitCloneDepth *int64 `json:"GitCloneDepth,omitempty"`
    InsecureSsl *bool `json:"InsecureSsl,omitempty"`
    Location *string `json:"Location,omitempty"`
    Type *string `json:"Type,omitempty"`
    
}

