package shared



type ScheduleKeyDeletionRequest struct {
    KeyID string `json:"KeyId"`
    PendingWindowInDays *int64 `json:"PendingWindowInDays,omitempty"`
    
}

