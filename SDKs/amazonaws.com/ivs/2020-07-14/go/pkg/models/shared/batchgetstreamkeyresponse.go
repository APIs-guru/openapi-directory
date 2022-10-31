package shared

type BatchGetStreamKeyResponse struct {
	Errors     []BatchError `json:"errors,omitempty"`
	StreamKeys []StreamKey  `json:"streamKeys,omitempty"`
}
