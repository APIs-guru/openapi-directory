package shared

// PricingSummary
// This type contains a summary of cumulative costs and charges for all line items of an order, including item price, price adjustments, sales taxes, delivery costs, and order discounts.
type PricingSummary struct {
	Adjustment            *Amount `json:"adjustment,omitempty"`
	DeliveryCost          *Amount `json:"deliveryCost,omitempty"`
	DeliveryDiscount      *Amount `json:"deliveryDiscount,omitempty"`
	Fee                   *Amount `json:"fee,omitempty"`
	PriceDiscountSubtotal *Amount `json:"priceDiscountSubtotal,omitempty"`
	PriceSubtotal         *Amount `json:"priceSubtotal,omitempty"`
	Tax                   *Amount `json:"tax,omitempty"`
	Total                 *Amount `json:"total,omitempty"`
}
