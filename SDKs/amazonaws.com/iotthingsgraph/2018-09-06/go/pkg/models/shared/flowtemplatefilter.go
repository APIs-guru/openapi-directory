package shared

// FlowTemplateFilter
// An object that filters a workflow search.
type FlowTemplateFilter struct {
	Name  FlowTemplateFilterNameEnum `json:"name"`
	Value []string                   `json:"value"`
}
