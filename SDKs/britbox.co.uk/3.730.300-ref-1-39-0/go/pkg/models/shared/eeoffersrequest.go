package shared

type EeOffersRequest struct {
	AccessToken    string  `json:"accessToken"`
	Msisdn         string  `json:"msisdn"`
	TrackingHeader *string `json:"trackingHeader"`
}
