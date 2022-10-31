package shared

import (
"time")

type ScheduleKeyDeletionResponse struct {
    DeletionDate *time.Time `json:"DeletionDate,omitempty"`
    KeyID *string `json:"KeyId,omitempty"`
    KeyState *KeyStateEnum `json:"KeyState,omitempty"`
    PendingWindowInDays *int64 `json:"PendingWindowInDays,omitempty"`
    
}

