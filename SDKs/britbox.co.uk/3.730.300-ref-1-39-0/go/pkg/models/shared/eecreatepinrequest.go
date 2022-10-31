package shared

type EeCreatePinRequest struct {
	AccessToken    string  `json:"accessToken"`
	Msisdn         string  `json:"msisdn"`
	TrackingHeader *string `json:"trackingHeader,omitempty"`
}
