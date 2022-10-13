package shared

type Shipment struct {
	Status         *string `json:"Status"`
	TrackingNumber *string `json:"TrackingNumber"`
}
