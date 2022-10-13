package shared

type GetParametersByPathRequest struct {
	MaxResults       *int64                  `json:"MaxResults"`
	NextToken        *string                 `json:"NextToken"`
	ParameterFilters []ParameterStringFilter `json:"ParameterFilters"`
	Path             string                  `json:"Path"`
	Recursive        *bool                   `json:"Recursive"`
	WithDecryption   *bool                   `json:"WithDecryption"`
}
