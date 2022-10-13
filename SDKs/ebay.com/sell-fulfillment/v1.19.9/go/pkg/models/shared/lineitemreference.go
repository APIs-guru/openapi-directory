package shared

type LineItemReference struct {
	LineItemID *string `json:"lineItemId"`
	Quantity   *int32  `json:"quantity"`
}
