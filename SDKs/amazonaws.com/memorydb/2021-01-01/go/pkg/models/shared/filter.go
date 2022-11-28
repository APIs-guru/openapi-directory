package shared

// Filter
// Used to streamline results of a search based on the property being filtered.
type Filter struct {
	Name   string   `json:"Name"`
	Values []string `json:"Values"`
}
