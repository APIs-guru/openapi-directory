package shared



type CreateDatabaseRequest struct {
    DatabaseName string `json:"DatabaseName"`
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

