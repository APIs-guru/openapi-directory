package shared

type RankingWeekPollsRanks struct {
	Conference      *string `json:"conference"`
	FirstPlaceVotes *int64  `json:"firstPlaceVotes"`
	Points          *int64  `json:"points"`
	Rank            *int64  `json:"rank"`
	School          *string `json:"school"`
}

type RankingWeekPolls struct {
	Poll  *string                 `json:"poll"`
	Ranks []RankingWeekPollsRanks `json:"ranks"`
}

type RankingWeek struct {
	Polls      []RankingWeekPolls `json:"polls"`
	Season     *int64             `json:"season"`
	SeasonType *string            `json:"seasonType"`
	Week       *int64             `json:"week"`
}
