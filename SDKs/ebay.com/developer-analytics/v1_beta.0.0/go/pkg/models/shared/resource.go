package shared

// Resource
// This complex type defines the resource (API method) and the current rate-limit data for that resource.
type Resource struct {
	Name  *string `json:"name,omitempty"`
	Rates []Rate  `json:"rates,omitempty"`
}
