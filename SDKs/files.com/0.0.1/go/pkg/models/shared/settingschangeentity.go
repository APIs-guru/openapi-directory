package shared

import (
"time")

type SettingsChangeEntity struct {
    ChangeDetails map[string]interface{} `json:"change_details,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    UserID *int32 `json:"user_id,omitempty"`
    
}

