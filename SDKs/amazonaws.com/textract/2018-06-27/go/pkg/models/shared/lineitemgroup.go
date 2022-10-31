package shared

type LineItemGroup struct {
	LineItemGroupIndex *int64           `json:"LineItemGroupIndex,omitempty"`
	LineItems          []LineItemFields `json:"LineItems,omitempty"`
}
