package shared



type FolderConfiguration struct {
    Action RetentionActionEnum `json:"Action"`
    Name FolderNameEnum `json:"Name"`
    Period *int64 `json:"Period,omitempty"`
    
}

