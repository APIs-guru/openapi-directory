package shared

type OverageDetails struct {
	Count           *int32 `json:"count"`
	Limit           *int32 `json:"limit"`
	OveragesReached *bool  `json:"overages_reached"`
	Remaining       *int32 `json:"remaining"`
}
