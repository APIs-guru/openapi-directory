package shared



type GameLinesLines struct {
    AwayMoneyline *float64 `json:"awayMoneyline,omitempty"`
    FormattedSpread *string `json:"formattedSpread,omitempty"`
    HomeMoneyline *float64 `json:"homeMoneyline,omitempty"`
    OverUnder *float64 `json:"overUnder,omitempty"`
    OverUnderOpen *float64 `json:"overUnderOpen,omitempty"`
    Provider *string `json:"provider,omitempty"`
    Spread *float64 `json:"spread,omitempty"`
    SpreadOpen *float64 `json:"spreadOpen,omitempty"`
    
}

type GameLines struct {
    AwayConference *string `json:"awayConference,omitempty"`
    AwayScore *int64 `json:"awayScore,omitempty"`
    AwayTeam *string `json:"awayTeam,omitempty"`
    HomeConference *string `json:"homeConference,omitempty"`
    HomeScore *int64 `json:"homeScore,omitempty"`
    HomeTeam *string `json:"homeTeam,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Lines []GameLinesLines `json:"lines,omitempty"`
    Season *int64 `json:"season,omitempty"`
    SeasonType *string `json:"seasonType,omitempty"`
    Week *int64 `json:"week,omitempty"`
    
}

