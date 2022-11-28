package shared

// FulfillmentStartInstruction
// This type contains a set of specifications for processing a fulfillment of an order, including the type of fulfillment, shipping carrier and service, addressing details, and estimated delivery window. These instructions are derived from the buyer's and seller's eBay account preferences, the listing parameters, and the buyer's checkout selections. The seller can use them as a starting point for packaging, addressing, and shipping the order.
type FulfillmentStartInstruction struct {
	EbaySupportedFulfillment    *bool         `json:"ebaySupportedFulfillment,omitempty"`
	FinalDestinationAddress     *Address      `json:"finalDestinationAddress,omitempty"`
	FulfillmentInstructionsType *string       `json:"fulfillmentInstructionsType,omitempty"`
	MaxEstimatedDeliveryDate    *string       `json:"maxEstimatedDeliveryDate,omitempty"`
	MinEstimatedDeliveryDate    *string       `json:"minEstimatedDeliveryDate,omitempty"`
	PickupStep                  *PickupStep   `json:"pickupStep,omitempty"`
	ShippingStep                *ShippingStep `json:"shippingStep,omitempty"`
}
