package shared

type GetParametersByPathRequest struct {
	MaxResults       *int64                  `json:"MaxResults,omitempty"`
	NextToken        *string                 `json:"NextToken,omitempty"`
	ParameterFilters []ParameterStringFilter `json:"ParameterFilters,omitempty"`
	Path             string                  `json:"Path"`
	Recursive        *bool                   `json:"Recursive,omitempty"`
	WithDecryption   *bool                   `json:"WithDecryption,omitempty"`
}
