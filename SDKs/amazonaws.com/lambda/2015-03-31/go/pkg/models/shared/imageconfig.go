package shared

type ImageConfig struct {
	Command          []string `json:"Command"`
	EntryPoint       []string `json:"EntryPoint"`
	WorkingDirectory *string  `json:"WorkingDirectory"`
}
