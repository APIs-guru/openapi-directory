package shared

type WaitTime struct {
	WaitFor   *string `json:"WaitFor"`
	WaitUntil *string `json:"WaitUntil"`
}
