package shared

import (
	"time"
)

type SettingsChangeEntity struct {
	ChangeDetails map[string]interface{} `json:"change_details"`
	CreatedAt     *time.Time             `json:"created_at"`
	UserID        *int32                 `json:"user_id"`
}
