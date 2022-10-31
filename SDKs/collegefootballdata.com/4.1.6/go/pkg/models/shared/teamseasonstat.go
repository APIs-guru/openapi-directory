package shared



type TeamSeasonStat struct {
    Conference *string `json:"conference,omitempty"`
    Season *int64 `json:"season,omitempty"`
    StatName *string `json:"statName,omitempty"`
    StatValue *int64 `json:"statValue,omitempty"`
    Team *string `json:"team,omitempty"`
    
}

