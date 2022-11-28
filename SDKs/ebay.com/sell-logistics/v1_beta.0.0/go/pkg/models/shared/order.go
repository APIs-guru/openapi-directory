package shared

// Order
// This complex type defines an order from which a seller is including one or more line items in a single package to be shipped.
type Order struct {
	Channel *string `json:"channel,omitempty"`
	OrderID *string `json:"orderId,omitempty"`
}
