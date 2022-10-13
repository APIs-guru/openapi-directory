package shared

type EeValidatePinResponse struct {
	PinValid       *string `json:"pinValid"`
	TrackingHeader string  `json:"trackingHeader"`
}
