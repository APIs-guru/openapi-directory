package shared

type SystemTemplateFilter struct {
	Name  SystemTemplateFilterNameEnum `json:"name"`
	Value []string                     `json:"value"`
}
