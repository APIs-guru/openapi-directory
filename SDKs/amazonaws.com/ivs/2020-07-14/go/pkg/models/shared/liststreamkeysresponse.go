package shared

type ListStreamKeysResponse struct {
	NextToken  *string            `json:"nextToken,omitempty"`
	StreamKeys []StreamKeySummary `json:"streamKeys"`
}
