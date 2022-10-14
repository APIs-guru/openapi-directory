package shared

type ModelClientConfig struct {
	InvocationsMaxRetries       *int64 `json:"InvocationsMaxRetries,omitempty"`
	InvocationsTimeoutInSeconds *int64 `json:"InvocationsTimeoutInSeconds,omitempty"`
}
