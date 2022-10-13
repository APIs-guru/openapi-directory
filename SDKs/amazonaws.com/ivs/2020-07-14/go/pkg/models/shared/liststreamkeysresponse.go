package shared

type ListStreamKeysResponse struct {
	NextToken  *string            `json:"nextToken"`
	StreamKeys []StreamKeySummary `json:"streamKeys"`
}
