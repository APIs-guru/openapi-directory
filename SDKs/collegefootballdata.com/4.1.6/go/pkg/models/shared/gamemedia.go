package shared



type GameMedia struct {
    AwayConference *string `json:"awayConference,omitempty"`
    AwayTeam *string `json:"awayTeam,omitempty"`
    HomeConference *string `json:"homeConference,omitempty"`
    HomeTeam *string `json:"homeTeam,omitempty"`
    ID *int64 `json:"id,omitempty"`
    IsStartTimeTbd *bool `json:"isStartTimeTBD,omitempty"`
    MediaType *string `json:"mediaType,omitempty"`
    Outlet *string `json:"outlet,omitempty"`
    Season *int64 `json:"season,omitempty"`
    SeasonType *string `json:"seasonType,omitempty"`
    StartTime *string `json:"startTime,omitempty"`
    Week *int64 `json:"week,omitempty"`
    
}

