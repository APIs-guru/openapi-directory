package shared

type ListRetirableGrantsRequest struct {
	Limit             *int64  `json:"Limit"`
	Marker            *string `json:"Marker"`
	RetiringPrincipal string  `json:"RetiringPrincipal"`
}
