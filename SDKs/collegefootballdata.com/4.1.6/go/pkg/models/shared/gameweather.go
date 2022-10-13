package shared

type GameWeather struct {
	AwayConference       *string  `json:"awayConference"`
	AwayTeam             *string  `json:"awayTeam"`
	DewPoint             *float64 `json:"dewPoint"`
	HomeConference       *string  `json:"homeConference"`
	HomeTeam             *string  `json:"homeTeam"`
	Humidity             *float64 `json:"humidity"`
	ID                   *int64   `json:"id"`
	IsStartTimeTbd       *bool    `json:"isStartTimeTBD"`
	Precipitation        *float64 `json:"precipitation"`
	Pressure             *float64 `json:"pressure"`
	Season               *int64   `json:"season"`
	SeasonType           *string  `json:"seasonType"`
	Snowfall             *float64 `json:"snowfall"`
	StartTime            *string  `json:"startTime"`
	Temperature          *float64 `json:"temperature"`
	Venue                *string  `json:"venue"`
	VenueID              *int64   `json:"venueId"`
	WeatherCondition     *string  `json:"weatherCondition"`
	WeatherConditionCode *int64   `json:"weatherConditionCode"`
	Week                 *int64   `json:"week"`
	WindDirection        *float64 `json:"windDirection"`
	WindSpeed            *float64 `json:"windSpeed"`
}
