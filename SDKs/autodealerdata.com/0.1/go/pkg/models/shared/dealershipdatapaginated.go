package shared

type DealershipDataPaginated struct {
	Dealers  []DealershipData `json:"dealers"`
	MaxPages int64            `json:"maxPages"`
	Page     int64            `json:"page"`
}
