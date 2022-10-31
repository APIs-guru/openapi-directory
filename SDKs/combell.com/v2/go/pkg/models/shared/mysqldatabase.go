package shared



type MySQLDatabase struct {
    AccountID *int32 `json:"account_id,omitempty"`
    ActualSize *int32 `json:"actual_size,omitempty"`
    Hostname *string `json:"hostname,omitempty"`
    MaxSize *int32 `json:"max_size,omitempty"`
    Name *string `json:"name,omitempty"`
    UserCount *int32 `json:"user_count,omitempty"`
    
}

