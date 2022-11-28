package shared

// LineItemGroup
// A grouping of tables which contain LineItems, with each table identified by the table's <code>LineItemGroupIndex</code>.
type LineItemGroup struct {
	LineItemGroupIndex *int64           `json:"LineItemGroupIndex,omitempty"`
	LineItems          []LineItemFields `json:"LineItems,omitempty"`
}
