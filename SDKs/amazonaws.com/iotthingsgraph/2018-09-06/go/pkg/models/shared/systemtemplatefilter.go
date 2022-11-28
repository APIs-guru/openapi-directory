package shared

// SystemTemplateFilter
// An object that filters a system search.
type SystemTemplateFilter struct {
	Name  SystemTemplateFilterNameEnum `json:"name"`
	Value []string                     `json:"value"`
}
