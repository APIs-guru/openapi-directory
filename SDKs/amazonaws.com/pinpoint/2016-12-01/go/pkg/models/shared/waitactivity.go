package shared

type WaitActivity struct {
	NextActivity *string   `json:"NextActivity"`
	WaitTime     *WaitTime `json:"WaitTime"`
}
