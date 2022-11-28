package shared

// EbayFulfillmentProgram
// This type is used to provide details about an order line item being fulfilled by eBay or an eBay fulfillment partner.
type EbayFulfillmentProgram struct {
	FulfilledBy *string `json:"fulfilledBy,omitempty"`
}
