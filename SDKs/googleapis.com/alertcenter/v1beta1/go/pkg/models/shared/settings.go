package shared

// Settings
// Customer-level settings.
type Settings struct {
	Notifications []Notification `json:"notifications,omitempty"`
}
