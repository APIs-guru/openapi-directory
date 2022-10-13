package shared

type TestsTests struct {
	Classname *string     `json:"classname"`
	File      *string     `json:"file"`
	Message   *string     `json:"message"`
	Name      *string     `json:"name"`
	Result    *StatusEnum `json:"result"`
	RunTime   *float64    `json:"run_time"`
	Source    *string     `json:"source"`
}

type Tests struct {
	Tests []TestsTests `json:"tests"`
}
