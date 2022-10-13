package shared

type Player struct {
	FirstName      *string  `json:"first_name"`
	Height         *int64   `json:"height"`
	HomeCity       *string  `json:"home_city"`
	HomeCountry    *string  `json:"home_country"`
	HomeCountyFips *string  `json:"home_county_fips"`
	HomeLatitude   *float64 `json:"home_latitude"`
	HomeLongitude  *float64 `json:"home_longitude"`
	HomeState      *string  `json:"home_state"`
	ID             *int64   `json:"id"`
	Jersey         *int64   `json:"jersey"`
	LastName       *string  `json:"last_name"`
	Position       *string  `json:"position"`
	RecruitIds     []int64  `json:"recruit_ids"`
	Team           *string  `json:"team"`
	Weight         *int64   `json:"weight"`
	Year           *int64   `json:"year"`
}
