package shared



type TeamGameTeamsStats struct {
    Category *string `json:"category,omitempty"`
    Stat *string `json:"stat,omitempty"`
    
}

type TeamGameTeams struct {
    Conference *string `json:"conference,omitempty"`
    HomeAway *bool `json:"homeAway,omitempty"`
    Points *int64 `json:"points,omitempty"`
    School *string `json:"school,omitempty"`
    Stats []TeamGameTeamsStats `json:"stats,omitempty"`
    
}

type TeamGame struct {
    ID *int64 `json:"id,omitempty"`
    Teams []TeamGameTeams `json:"teams,omitempty"`
    
}

