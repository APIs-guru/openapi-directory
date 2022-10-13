package shared

type ProductData struct {
	ItemRevenue     *float64 `json:"itemRevenue"`
	ProductName     *string  `json:"productName"`
	ProductQuantity *string  `json:"productQuantity"`
	ProductSku      *string  `json:"productSku"`
}
