package shared

// EntityFilter
// An object that filters an entity search. Multiple filters function as OR criteria in the search. For example a search that includes a <code>NAMESPACE</code> and a <code>REFERENCED_ENTITY_ID</code> filter searches for entities in the specified namespace that use the entity specified by the value of <code>REFERENCED_ENTITY_ID</code>.
type EntityFilter struct {
	Name  *EntityFilterNameEnum `json:"name,omitempty"`
	Value []string              `json:"value,omitempty"`
}
