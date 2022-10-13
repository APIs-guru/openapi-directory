package shared

type LineItemGroup struct {
	LineItemGroupIndex *int64           `json:"LineItemGroupIndex"`
	LineItems          []LineItemFields `json:"LineItems"`
}
