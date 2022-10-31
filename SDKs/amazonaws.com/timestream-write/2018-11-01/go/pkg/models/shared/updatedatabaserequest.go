package shared



type UpdateDatabaseRequest struct {
    DatabaseName string `json:"DatabaseName"`
    KmsKeyID string `json:"KmsKeyId"`
    
}

