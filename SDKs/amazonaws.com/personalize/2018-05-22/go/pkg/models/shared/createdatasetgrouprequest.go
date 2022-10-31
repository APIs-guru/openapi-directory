package shared



type CreateDatasetGroupRequest struct {
    KmsKeyArn *string `json:"kmsKeyArn,omitempty"`
    Name string `json:"name"`
    RoleArn *string `json:"roleArn,omitempty"`
    
}

