package shared

type NotificationChannel struct {
	Frequency int64  `json:"frequency"`
	ID        int32  `json:"id"`
	IsEnabled bool   `json:"isEnabled"`
	Name      string `json:"name"`
	Type      string `json:"type"`
}
