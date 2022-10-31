package shared



type InfoFromBuyer struct {
    Note *string `json:"note,omitempty"`
    ReturnShipmentTracking []TrackingInfo `json:"returnShipmentTracking,omitempty"`
    
}

