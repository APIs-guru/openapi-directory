package shared

type CreativeDealIdsDealStatuses struct {
	ArcStatus     *string `json:"arcStatus,omitempty"`
	DealID        *string `json:"dealId,omitempty"`
	WebPropertyID *int32  `json:"webPropertyId,omitempty"`
}

type CreativeDealIds struct {
	DealStatuses []CreativeDealIdsDealStatuses `json:"dealStatuses,omitempty"`
	Kind         *string                       `json:"kind,omitempty"`
}
