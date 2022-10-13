package shared

type GetParameterHistoryRequest struct {
	MaxResults     *int64  `json:"MaxResults"`
	Name           string  `json:"Name"`
	NextToken      *string `json:"NextToken"`
	WithDecryption *bool   `json:"WithDecryption"`
}
