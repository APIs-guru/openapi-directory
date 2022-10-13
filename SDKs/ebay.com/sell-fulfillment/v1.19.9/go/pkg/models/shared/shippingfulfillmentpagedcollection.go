package shared

type ShippingFulfillmentPagedCollection struct {
	Fulfillments []ShippingFulfillment `json:"fulfillments"`
	Total        *int32                `json:"total"`
	Warnings     []Error               `json:"warnings"`
}
