package shared

type Mds struct {
	Make                      *string  `json:"make"`
	Mds                       *int64   `json:"mds"`
	Model                     *string  `json:"model"`
	SoldVins                  []string `json:"sold_vins"`
	TotalActiveCarsForYmmt    *int64   `json:"total_active_cars_for_ymmt"`
	TotalCarsSoldInLast45Days *int64   `json:"total_cars_sold_in_last_45_days"`
	Trim                      *string  `json:"trim"`
	Year                      *int64   `json:"year"`
}
