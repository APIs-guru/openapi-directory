package shared



type PositionGroupRecruitingRating struct {
    AverageRating *float64 `json:"averageRating,omitempty"`
    AverageStars *float64 `json:"averageStars,omitempty"`
    Commits *float64 `json:"commits,omitempty"`
    Conference *string `json:"conference,omitempty"`
    PositionGroup *string `json:"positionGroup,omitempty"`
    Team *string `json:"team,omitempty"`
    TotalRating *float64 `json:"totalRating,omitempty"`
    
}

