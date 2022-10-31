package shared



type TeamRecruitingRank struct {
    Points *float64 `json:"points,omitempty"`
    Rank *int64 `json:"rank,omitempty"`
    Team *string `json:"team,omitempty"`
    Year *int64 `json:"year,omitempty"`
    
}

