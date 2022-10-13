package shared

type Order struct {
	Channel *string `json:"channel"`
	OrderID *string `json:"orderId"`
}
