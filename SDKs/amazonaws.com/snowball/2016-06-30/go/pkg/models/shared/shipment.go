package shared

// Shipment
// The <code>Status</code> and <code>TrackingNumber</code> information for an inbound or outbound shipment.
type Shipment struct {
	Status         *string `json:"Status,omitempty"`
	TrackingNumber *string `json:"TrackingNumber,omitempty"`
}
