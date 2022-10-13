package shared

type CommandFilter struct {
	Key   CommandFilterKeyEnum `json:"key"`
	Value string               `json:"value"`
}
