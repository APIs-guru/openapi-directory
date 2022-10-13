package shared

type ExportFilter struct {
	Name     ExportFilterNameEnum     `json:"name"`
	Operator ExportFilterOperatorEnum `json:"operator"`
	Values   []string                 `json:"values"`
}
