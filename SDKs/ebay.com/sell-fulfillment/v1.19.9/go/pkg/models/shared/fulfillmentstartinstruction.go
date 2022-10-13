package shared

type FulfillmentStartInstruction struct {
	EbaySupportedFulfillment    *bool         `json:"ebaySupportedFulfillment"`
	FinalDestinationAddress     *Address      `json:"finalDestinationAddress"`
	FulfillmentInstructionsType *string       `json:"fulfillmentInstructionsType"`
	MaxEstimatedDeliveryDate    *string       `json:"maxEstimatedDeliveryDate"`
	MinEstimatedDeliveryDate    *string       `json:"minEstimatedDeliveryDate"`
	PickupStep                  *PickupStep   `json:"pickupStep"`
	ShippingStep                *ShippingStep `json:"shippingStep"`
}
