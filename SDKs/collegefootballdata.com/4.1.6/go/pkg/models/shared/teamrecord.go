package shared

type TeamRecordAwayGames struct {
	Games  *int64 `json:"games,omitempty"`
	Losses *int64 `json:"losses,omitempty"`
	Ties   *int64 `json:"ties,omitempty"`
	Wins   *int64 `json:"wins,omitempty"`
}

type TeamRecordConferenceGames struct {
	Games  *int64 `json:"games,omitempty"`
	Losses *int64 `json:"losses,omitempty"`
	Ties   *int64 `json:"ties,omitempty"`
	Wins   *int64 `json:"wins,omitempty"`
}

type TeamRecordHomeGames struct {
	Games  *int64 `json:"games,omitempty"`
	Losses *int64 `json:"losses,omitempty"`
	Ties   *int64 `json:"ties,omitempty"`
	Wins   *int64 `json:"wins,omitempty"`
}

type TeamRecordTotal struct {
	Games  *int64 `json:"games,omitempty"`
	Losses *int64 `json:"losses,omitempty"`
	Ties   *int64 `json:"ties,omitempty"`
	Wins   *int64 `json:"wins,omitempty"`
}

type TeamRecord struct {
	AwayGames       *TeamRecordAwayGames       `json:"awayGames,omitempty"`
	Conference      *string                    `json:"conference,omitempty"`
	ConferenceGames *TeamRecordConferenceGames `json:"conferenceGames,omitempty"`
	Division        *string                    `json:"division,omitempty"`
	HomeGames       *TeamRecordHomeGames       `json:"homeGames,omitempty"`
	Team            *string                    `json:"team,omitempty"`
	Total           *TeamRecordTotal           `json:"total,omitempty"`
	Year            *int64                     `json:"year,omitempty"`
}
