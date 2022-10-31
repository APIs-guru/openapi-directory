package shared



type GameWeather struct {
    AwayConference *string `json:"awayConference,omitempty"`
    AwayTeam *string `json:"awayTeam,omitempty"`
    DewPoint *float64 `json:"dewPoint,omitempty"`
    HomeConference *string `json:"homeConference,omitempty"`
    HomeTeam *string `json:"homeTeam,omitempty"`
    Humidity *float64 `json:"humidity,omitempty"`
    ID *int64 `json:"id,omitempty"`
    IsStartTimeTbd *bool `json:"isStartTimeTBD,omitempty"`
    Precipitation *float64 `json:"precipitation,omitempty"`
    Pressure *float64 `json:"pressure,omitempty"`
    Season *int64 `json:"season,omitempty"`
    SeasonType *string `json:"seasonType,omitempty"`
    Snowfall *float64 `json:"snowfall,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    Temperature *float64 `json:"temperature,omitempty"`
    Venue *string `json:"venue,omitempty"`
    VenueID *int64 `json:"venueId,omitempty"`
    WeatherCondition *string `json:"weatherCondition,omitempty"`
    WeatherConditionCode *int64 `json:"weatherConditionCode,omitempty"`
    Week *int64 `json:"week,omitempty"`
    WindDirection *float64 `json:"windDirection,omitempty"`
    WindSpeed *float64 `json:"windSpeed,omitempty"`
    
}

