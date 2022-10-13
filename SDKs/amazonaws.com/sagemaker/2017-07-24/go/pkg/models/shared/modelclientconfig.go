package shared

type ModelClientConfig struct {
	InvocationsMaxRetries       *int64 `json:"InvocationsMaxRetries"`
	InvocationsTimeoutInSeconds *int64 `json:"InvocationsTimeoutInSeconds"`
}
