package shared



type ShippingDetails struct {
    InboundShipment *Shipment `json:"InboundShipment,omitempty"`
    OutboundShipment *Shipment `json:"OutboundShipment,omitempty"`
    ShippingOption *ShippingOptionEnum `json:"ShippingOption,omitempty"`
    
}

