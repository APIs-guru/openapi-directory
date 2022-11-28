package shared

// ProductData
// Details of the products in an e-commerce transaction.
type ProductData struct {
	ItemRevenue     *float64 `json:"itemRevenue,omitempty"`
	ProductName     *string  `json:"productName,omitempty"`
	ProductQuantity *string  `json:"productQuantity,omitempty"`
	ProductSku      *string  `json:"productSku,omitempty"`
}
