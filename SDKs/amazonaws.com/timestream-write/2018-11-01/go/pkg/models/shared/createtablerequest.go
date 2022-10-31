package shared



type CreateTableRequest struct {
    DatabaseName string `json:"DatabaseName"`
    RetentionProperties *RetentionProperties `json:"RetentionProperties,omitempty"`
    TableName string `json:"TableName"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

