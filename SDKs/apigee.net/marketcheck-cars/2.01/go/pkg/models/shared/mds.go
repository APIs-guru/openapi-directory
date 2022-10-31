package shared

type Mds struct {
	Make                      *string  `json:"make,omitempty"`
	Mds                       *int64   `json:"mds,omitempty"`
	Model                     *string  `json:"model,omitempty"`
	SoldVins                  []string `json:"sold_vins,omitempty"`
	TotalActiveCarsForYmmt    *int64   `json:"total_active_cars_for_ymmt,omitempty"`
	TotalCarsSoldInLast45Days *int64   `json:"total_cars_sold_in_last_45_days,omitempty"`
	Trim                      *string  `json:"trim,omitempty"`
	Year                      *int64   `json:"year,omitempty"`
}
