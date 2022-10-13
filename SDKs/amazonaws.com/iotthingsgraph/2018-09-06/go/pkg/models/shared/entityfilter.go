package shared

type EntityFilter struct {
	Name  *EntityFilterNameEnum `json:"name"`
	Value []string              `json:"value"`
}
