package shared

type Player struct {
	FirstName      *string  `json:"first_name,omitempty"`
	Height         *int64   `json:"height,omitempty"`
	HomeCity       *string  `json:"home_city,omitempty"`
	HomeCountry    *string  `json:"home_country,omitempty"`
	HomeCountyFips *string  `json:"home_county_fips,omitempty"`
	HomeLatitude   *float64 `json:"home_latitude,omitempty"`
	HomeLongitude  *float64 `json:"home_longitude,omitempty"`
	HomeState      *string  `json:"home_state,omitempty"`
	ID             *int64   `json:"id,omitempty"`
	Jersey         *int64   `json:"jersey,omitempty"`
	LastName       *string  `json:"last_name,omitempty"`
	Position       *string  `json:"position,omitempty"`
	RecruitIds     []int64  `json:"recruit_ids,omitempty"`
	Team           *string  `json:"team,omitempty"`
	Weight         *int64   `json:"weight,omitempty"`
	Year           *int64   `json:"year,omitempty"`
}
