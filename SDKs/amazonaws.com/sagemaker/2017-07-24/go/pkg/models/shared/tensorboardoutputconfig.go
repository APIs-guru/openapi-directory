package shared

// TensorBoardOutputConfig
// Configuration of storage locations for the Debugger TensorBoard output data.
type TensorBoardOutputConfig struct {
	LocalPath    *string `json:"LocalPath,omitempty"`
	S3OutputPath string  `json:"S3OutputPath"`
}
