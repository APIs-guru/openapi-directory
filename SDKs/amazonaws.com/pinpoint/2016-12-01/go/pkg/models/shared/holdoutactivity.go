package shared

// HoldoutActivity
// Specifies the settings for a holdout activity in a journey. This type of activity stops a journey for a specified percentage of participants.
type HoldoutActivity struct {
	NextActivity *string `json:"NextActivity,omitempty"`
	Percentage   int64   `json:"Percentage"`
}
