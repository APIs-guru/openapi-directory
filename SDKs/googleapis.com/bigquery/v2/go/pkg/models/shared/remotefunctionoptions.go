package shared

// RemoteFunctionOptions
// Options for a remote user-defined function.
type RemoteFunctionOptions struct {
	Connection         *string           `json:"connection,omitempty"`
	Endpoint           *string           `json:"endpoint,omitempty"`
	MaxBatchingRows    *string           `json:"maxBatchingRows,omitempty"`
	UserDefinedContext map[string]string `json:"userDefinedContext,omitempty"`
}
