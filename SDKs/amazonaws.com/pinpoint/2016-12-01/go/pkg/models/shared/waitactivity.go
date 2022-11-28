package shared

// WaitActivity
// Specifies the settings for a wait activity in a journey. This type of activity waits for a certain amount of time or until a specific date and time before moving participants to the next activity in a journey.
type WaitActivity struct {
	NextActivity *string   `json:"NextActivity,omitempty"`
	WaitTime     *WaitTime `json:"WaitTime,omitempty"`
}
