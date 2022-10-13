package shared

type GameMedia struct {
	AwayConference *string `json:"awayConference"`
	AwayTeam       *string `json:"awayTeam"`
	HomeConference *string `json:"homeConference"`
	HomeTeam       *string `json:"homeTeam"`
	ID             *int64  `json:"id"`
	IsStartTimeTbd *bool   `json:"isStartTimeTBD"`
	MediaType      *string `json:"mediaType"`
	Outlet         *string `json:"outlet"`
	Season         *int64  `json:"season"`
	SeasonType     *string `json:"seasonType"`
	StartTime      *string `json:"startTime"`
	Week           *int64  `json:"week"`
}
