package shared

type BatchGetStreamKeyResponse struct {
	Errors     []BatchError `json:"errors"`
	StreamKeys []StreamKey  `json:"streamKeys"`
}
