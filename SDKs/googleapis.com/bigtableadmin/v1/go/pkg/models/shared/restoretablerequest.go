package shared



type RestoreTableRequest struct {
    Backup *string `json:"backup,omitempty"`
    TableID *string `json:"tableId,omitempty"`
    
}

