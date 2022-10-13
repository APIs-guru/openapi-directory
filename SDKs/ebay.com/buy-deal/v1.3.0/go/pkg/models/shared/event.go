package shared

type Event struct {
	ApplicableCoupons    []Coupon `json:"applicableCoupons"`
	Description          *string  `json:"description"`
	EndDate              *string  `json:"endDate"`
	EventAffiliateWebURL *string  `json:"eventAffiliateWebUrl"`
	EventID              *string  `json:"eventId"`
	EventWebURL          *string  `json:"eventWebUrl"`
	Images               []Image  `json:"images"`
	StartDate            *string  `json:"startDate"`
	Terms                *Terms   `json:"terms"`
	Title                *string  `json:"title"`
}
