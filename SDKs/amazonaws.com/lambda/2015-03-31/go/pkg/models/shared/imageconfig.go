package shared

// ImageConfig
// Configuration values that override the container image Dockerfile settings. See <a href="https://docs.aws.amazon.com/lambda/latest/dg/images-create.html#images-parms">Container settings</a>.
type ImageConfig struct {
	Command          []string `json:"Command,omitempty"`
	EntryPoint       []string `json:"EntryPoint,omitempty"`
	WorkingDirectory *string  `json:"WorkingDirectory,omitempty"`
}
