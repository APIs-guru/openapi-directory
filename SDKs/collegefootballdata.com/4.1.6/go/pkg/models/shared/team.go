package shared

type TeamLocation struct {
	Capacity        *float64 `json:"capacity,omitempty"`
	City            *string  `json:"city,omitempty"`
	CountryCode     *string  `json:"country_code,omitempty"`
	Dome            *bool    `json:"dome,omitempty"`
	Elevation       *float64 `json:"elevation,omitempty"`
	Grass           *bool    `json:"grass,omitempty"`
	Latitude        *float64 `json:"latitude,omitempty"`
	Longitude       *float64 `json:"longitude,omitempty"`
	Name            *string  `json:"name,omitempty"`
	State           *string  `json:"state,omitempty"`
	Timezone        *string  `json:"timezone,omitempty"`
	VenueID         *int64   `json:"venue_id,omitempty"`
	YearConstructed *float64 `json:"year_constructed,omitempty"`
	Zip             *string  `json:"zip,omitempty"`
}

type Team struct {
	Abbreviation *string       `json:"abbreviation,omitempty"`
	AltColor     *string       `json:"alt_color,omitempty"`
	AltName1     *string       `json:"alt_name_1,omitempty"`
	AltName2     *string       `json:"alt_name_2,omitempty"`
	AltName3     *string       `json:"alt_name_3,omitempty"`
	Color        *string       `json:"color,omitempty"`
	Conference   *string       `json:"conference,omitempty"`
	Division     *string       `json:"division,omitempty"`
	ID           *int64        `json:"id,omitempty"`
	Location     *TeamLocation `json:"location,omitempty"`
	Logos        []string      `json:"logos,omitempty"`
	Mascot       *string       `json:"mascot,omitempty"`
	School       *string       `json:"school,omitempty"`
}
