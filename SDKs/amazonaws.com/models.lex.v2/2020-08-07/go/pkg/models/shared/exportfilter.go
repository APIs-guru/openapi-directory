package shared

// ExportFilter
// Filtes the response form the operation
type ExportFilter struct {
	Name     ExportFilterNameEnum     `json:"name"`
	Operator ExportFilterOperatorEnum `json:"operator"`
	Values   []string                 `json:"values"`
}
