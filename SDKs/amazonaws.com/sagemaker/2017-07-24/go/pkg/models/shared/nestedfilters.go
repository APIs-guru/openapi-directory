package shared

type NestedFilters struct {
	Filters            []Filter `json:"Filters"`
	NestedPropertyName string   `json:"NestedPropertyName"`
}
