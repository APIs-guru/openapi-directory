package shared



type PregameWp struct {
    AwayTeam *string `json:"awayTeam,omitempty"`
    GameID *int64 `json:"gameId,omitempty"`
    HomeTeam *string `json:"homeTeam,omitempty"`
    HomeWinProb *float64 `json:"homeWinProb,omitempty"`
    Season *int64 `json:"season,omitempty"`
    SeasonType *string `json:"seasonType,omitempty"`
    Spread *float64 `json:"spread,omitempty"`
    Week *int64 `json:"week,omitempty"`
    
}

