package shared



type CreateBackupRequest struct {
    Description *string `json:"Description,omitempty"`
    ServerName string `json:"ServerName"`
    Tags []Tag `json:"Tags,omitempty"`
    
}

