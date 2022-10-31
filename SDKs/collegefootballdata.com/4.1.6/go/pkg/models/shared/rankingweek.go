package shared



type RankingWeekPollsRanks struct {
    Conference *string `json:"conference,omitempty"`
    FirstPlaceVotes *int64 `json:"firstPlaceVotes,omitempty"`
    Points *int64 `json:"points,omitempty"`
    Rank *int64 `json:"rank,omitempty"`
    School *string `json:"school,omitempty"`
    
}

type RankingWeekPolls struct {
    Poll *string `json:"poll,omitempty"`
    Ranks []RankingWeekPollsRanks `json:"ranks,omitempty"`
    
}

type RankingWeek struct {
    Polls []RankingWeekPolls `json:"polls,omitempty"`
    Season *int64 `json:"season,omitempty"`
    SeasonType *string `json:"seasonType,omitempty"`
    Week *int64 `json:"week,omitempty"`
    
}

