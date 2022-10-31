package shared



type PlayerGameTeamsCategoriesTypesAthletes struct {
    ID *int64 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Stat *string `json:"stat,omitempty"`
    
}

type PlayerGameTeamsCategoriesTypes struct {
    Athletes []PlayerGameTeamsCategoriesTypesAthletes `json:"athletes,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type PlayerGameTeamsCategories struct {
    Name *string `json:"name,omitempty"`
    Types []PlayerGameTeamsCategoriesTypes `json:"types,omitempty"`
    
}

type PlayerGameTeamsSchool struct {
    Conference *string `json:"conference,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type PlayerGameTeams struct {
    Categories []PlayerGameTeamsCategories `json:"categories,omitempty"`
    HomeAway *bool `json:"homeAway,omitempty"`
    Points *int64 `json:"points,omitempty"`
    School *PlayerGameTeamsSchool `json:"school,omitempty"`
    
}

type PlayerGame struct {
    ID *int64 `json:"id,omitempty"`
    Teams []PlayerGameTeams `json:"teams,omitempty"`
    
}

