package shared

type EeValidatePinRequest struct {
	AccessToken    string  `json:"accessToken"`
	Pin            string  `json:"pin"`
	PinReference   string  `json:"pinReference"`
	TrackingHeader *string `json:"trackingHeader,omitempty"`
}
