package shared

// Filter
// A filter name and value pair that is used to return more specific results from a describe operation. Filters can be used to match a set of resources by specific criteria, such as tags, attributes, or IDs.
type Filter struct {
	Name   *string  `json:"Name,omitempty"`
	Values []string `json:"Values,omitempty"`
}
