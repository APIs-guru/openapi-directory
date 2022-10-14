package shared

type ShippingFulfillmentPagedCollection struct {
	Fulfillments []ShippingFulfillment `json:"fulfillments,omitempty"`
	Total        *int32                `json:"total,omitempty"`
	Warnings     []Error               `json:"warnings,omitempty"`
}
