package shared

type PricingSummary struct {
	Adjustment            *Amount `json:"adjustment"`
	DeliveryCost          *Amount `json:"deliveryCost"`
	DeliveryDiscount      *Amount `json:"deliveryDiscount"`
	Fee                   *Amount `json:"fee"`
	PriceDiscountSubtotal *Amount `json:"priceDiscountSubtotal"`
	PriceSubtotal         *Amount `json:"priceSubtotal"`
	Tax                   *Amount `json:"tax"`
	Total                 *Amount `json:"total"`
}
