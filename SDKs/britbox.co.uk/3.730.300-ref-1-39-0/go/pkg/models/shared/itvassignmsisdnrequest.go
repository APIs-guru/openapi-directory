package shared

type ItvAssignMsisdnRequest struct {
	EeProductID    string `json:"eeProductId"`
	Msisdn         string `json:"msisdn"`
	ProfileToken   string `json:"profileToken"`
	TrackingHeader string `json:"trackingHeader"`
}
