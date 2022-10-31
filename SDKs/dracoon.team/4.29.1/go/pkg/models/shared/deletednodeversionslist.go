package shared

type DeletedNodeVersionsList struct {
	Items []DeletedNode `json:"items"`
	Range Range         `json:"range"`
}
