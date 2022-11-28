package shared

// DeletedNodeVersionsList
// List of deleted versions of nodes
type DeletedNodeVersionsList struct {
	Items []DeletedNode `json:"items"`
	Range Range         `json:"range"`
}
