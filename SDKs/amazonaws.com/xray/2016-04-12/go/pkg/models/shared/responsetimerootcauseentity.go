package shared

type ResponseTimeRootCauseEntity struct {
	Coverage *float64 `json:"Coverage"`
	Name     *string  `json:"Name"`
	Remote   *bool    `json:"Remote"`
}
