package shared

type FlowTemplateFilter struct {
	Name  FlowTemplateFilterNameEnum `json:"name"`
	Value []string                   `json:"value"`
}
