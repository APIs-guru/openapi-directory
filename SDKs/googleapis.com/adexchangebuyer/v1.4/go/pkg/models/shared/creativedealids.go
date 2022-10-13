package shared

type CreativeDealIdsDealStatuses struct {
	ArcStatus     *string `json:"arcStatus"`
	DealID        *string `json:"dealId"`
	WebPropertyID *int32  `json:"webPropertyId"`
}

type CreativeDealIds struct {
	DealStatuses []CreativeDealIdsDealStatuses `json:"dealStatuses"`
	Kind         *string                       `json:"kind"`
}
