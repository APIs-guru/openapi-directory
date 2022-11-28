package shared

// ShippingFulfillmentPagedCollection
// This type contains the specifications for the entire collection of shipping fulfillments that are associated with the order specified by a getShippingFulfillments call. The fulfillments container returns an array of all the fulfillments in the collection.
type ShippingFulfillmentPagedCollection struct {
	Fulfillments []ShippingFulfillment `json:"fulfillments,omitempty"`
	Total        *int32                `json:"total,omitempty"`
	Warnings     []Error               `json:"warnings,omitempty"`
}
