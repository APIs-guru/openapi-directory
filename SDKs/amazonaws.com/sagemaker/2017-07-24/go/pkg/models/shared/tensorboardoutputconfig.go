package shared

type TensorBoardOutputConfig struct {
	LocalPath    *string `json:"LocalPath"`
	S3OutputPath string  `json:"S3OutputPath"`
}
