package shared

// Filter
// A filter object, used to optionally filter results from calls to the <code>ListEntities</code> and <code>ListChangeSets</code> actions.
type Filter struct {
	Name      *string  `json:"Name,omitempty"`
	ValueList []string `json:"ValueList,omitempty"`
}
