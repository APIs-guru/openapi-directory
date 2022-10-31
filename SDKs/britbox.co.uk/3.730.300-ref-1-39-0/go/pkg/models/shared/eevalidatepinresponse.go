package shared

type EeValidatePinResponse struct {
	PinValid       *string `json:"pinValid,omitempty"`
	TrackingHeader string  `json:"trackingHeader"`
}
