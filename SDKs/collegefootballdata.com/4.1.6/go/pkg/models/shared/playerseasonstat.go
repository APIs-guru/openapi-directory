package shared



type PlayerSeasonStat struct {
    Category *string `json:"category,omitempty"`
    Conference *string `json:"conference,omitempty"`
    Player *string `json:"player,omitempty"`
    PlayerID *int64 `json:"playerId,omitempty"`
    Season *int64 `json:"season,omitempty"`
    Stat *float64 `json:"stat,omitempty"`
    StatType *string `json:"statType,omitempty"`
    Team *string `json:"team,omitempty"`
    
}

