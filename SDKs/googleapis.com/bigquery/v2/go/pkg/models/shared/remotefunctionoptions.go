package shared

type RemoteFunctionOptions struct {
	Connection         *string           `json:"connection,omitempty"`
	Endpoint           *string           `json:"endpoint,omitempty"`
	MaxBatchingRows    *string           `json:"maxBatchingRows,omitempty"`
	UserDefinedContext map[string]string `json:"userDefinedContext,omitempty"`
}
