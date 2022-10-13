package shared

type RunnerNoLabels struct {
	Busy   *bool    `json:"busy"`
	ID     *float64 `json:"id"`
	Name   *string  `json:"name"`
	Os     *string  `json:"os"`
	Status *string  `json:"status"`
}
