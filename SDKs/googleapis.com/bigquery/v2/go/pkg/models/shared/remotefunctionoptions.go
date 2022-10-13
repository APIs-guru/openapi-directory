package shared

type RemoteFunctionOptions struct {
	Connection         *string           `json:"connection"`
	Endpoint           *string           `json:"endpoint"`
	MaxBatchingRows    *string           `json:"maxBatchingRows"`
	UserDefinedContext map[string]string `json:"userDefinedContext"`
}
