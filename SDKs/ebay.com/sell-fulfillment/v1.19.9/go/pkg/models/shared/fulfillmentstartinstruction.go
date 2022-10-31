package shared

type FulfillmentStartInstruction struct {
	EbaySupportedFulfillment    *bool         `json:"ebaySupportedFulfillment,omitempty"`
	FinalDestinationAddress     *Address      `json:"finalDestinationAddress,omitempty"`
	FulfillmentInstructionsType *string       `json:"fulfillmentInstructionsType,omitempty"`
	MaxEstimatedDeliveryDate    *string       `json:"maxEstimatedDeliveryDate,omitempty"`
	MinEstimatedDeliveryDate    *string       `json:"minEstimatedDeliveryDate,omitempty"`
	PickupStep                  *PickupStep   `json:"pickupStep,omitempty"`
	ShippingStep                *ShippingStep `json:"shippingStep,omitempty"`
}
