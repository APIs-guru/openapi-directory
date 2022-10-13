package shared

type TeamLocation struct {
	Capacity        *float64 `json:"capacity"`
	City            *string  `json:"city"`
	CountryCode     *string  `json:"country_code"`
	Dome            *bool    `json:"dome"`
	Elevation       *float64 `json:"elevation"`
	Grass           *bool    `json:"grass"`
	Latitude        *float64 `json:"latitude"`
	Longitude       *float64 `json:"longitude"`
	Name            *string  `json:"name"`
	State           *string  `json:"state"`
	Timezone        *string  `json:"timezone"`
	VenueID         *int64   `json:"venue_id"`
	YearConstructed *float64 `json:"year_constructed"`
	Zip             *string  `json:"zip"`
}

type Team struct {
	Abbreviation *string       `json:"abbreviation"`
	AltColor     *string       `json:"alt_color"`
	AltName1     *string       `json:"alt_name_1"`
	AltName2     *string       `json:"alt_name_2"`
	AltName3     *string       `json:"alt_name_3"`
	Color        *string       `json:"color"`
	Conference   *string       `json:"conference"`
	Division     *string       `json:"division"`
	ID           *int64        `json:"id"`
	Location     *TeamLocation `json:"location"`
	Logos        []string      `json:"logos"`
	Mascot       *string       `json:"mascot"`
	School       *string       `json:"school"`
}
