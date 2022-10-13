package shared

type ShippingDetails struct {
	InboundShipment  *Shipment           `json:"InboundShipment"`
	OutboundShipment *Shipment           `json:"OutboundShipment"`
	ShippingOption   *ShippingOptionEnum `json:"ShippingOption"`
}
