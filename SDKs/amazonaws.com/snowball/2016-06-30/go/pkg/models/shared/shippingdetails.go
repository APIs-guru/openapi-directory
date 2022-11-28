package shared

// ShippingDetails
// A job's shipping information, including inbound and outbound tracking numbers and shipping speed options.
type ShippingDetails struct {
	InboundShipment  *Shipment           `json:"InboundShipment,omitempty"`
	OutboundShipment *Shipment           `json:"OutboundShipment,omitempty"`
	ShippingOption   *ShippingOptionEnum `json:"ShippingOption,omitempty"`
}
