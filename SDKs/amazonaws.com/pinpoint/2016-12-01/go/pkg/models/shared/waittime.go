package shared

// WaitTime
// Specifies a duration or a date and time that indicates when Amazon Pinpoint determines whether an activity's conditions have been met or an activity moves participants to the next activity in a journey.
type WaitTime struct {
	WaitFor   *string `json:"WaitFor,omitempty"`
	WaitUntil *string `json:"WaitUntil,omitempty"`
}
