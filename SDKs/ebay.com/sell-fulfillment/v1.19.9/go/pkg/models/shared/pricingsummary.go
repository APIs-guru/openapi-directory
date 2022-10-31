package shared



type PricingSummary struct {
    Adjustment *Amount `json:"adjustment,omitempty"`
    DeliveryCost *Amount `json:"deliveryCost,omitempty"`
    DeliveryDiscount *Amount `json:"deliveryDiscount,omitempty"`
    Fee *Amount `json:"fee,omitempty"`
    PriceDiscountSubtotal *Amount `json:"priceDiscountSubtotal,omitempty"`
    PriceSubtotal *Amount `json:"priceSubtotal,omitempty"`
    Tax *Amount `json:"tax,omitempty"`
    Total *Amount `json:"total,omitempty"`
    
}

