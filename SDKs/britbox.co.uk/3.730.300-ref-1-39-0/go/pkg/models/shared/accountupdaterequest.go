package shared

type AccountUpdateRequest struct {
	Address                    *Address `json:"address"`
	DefaultPaymentInstrumentID *string  `json:"defaultPaymentInstrumentId"`
	DefaultPaymentMethodID     *string  `json:"defaultPaymentMethodId"`
	FirstName                  *string  `json:"firstName"`
	LastName                   *string  `json:"lastName"`
	MinRatingPlaybackGuard     *string  `json:"minRatingPlaybackGuard"`
	Segments                   []string `json:"segments"`
	TrackingEnabled            *bool    `json:"trackingEnabled"`
}
