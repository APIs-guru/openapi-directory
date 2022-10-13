package shared

type SellingLimit struct {
	Amount   *Amount `json:"amount"`
	Quantity *int32  `json:"quantity"`
}
