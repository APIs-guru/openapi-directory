package shared

type TeamRecordAwayGames struct {
	Games  *int64 `json:"games"`
	Losses *int64 `json:"losses"`
	Ties   *int64 `json:"ties"`
	Wins   *int64 `json:"wins"`
}

type TeamRecordConferenceGames struct {
	Games  *int64 `json:"games"`
	Losses *int64 `json:"losses"`
	Ties   *int64 `json:"ties"`
	Wins   *int64 `json:"wins"`
}

type TeamRecordHomeGames struct {
	Games  *int64 `json:"games"`
	Losses *int64 `json:"losses"`
	Ties   *int64 `json:"ties"`
	Wins   *int64 `json:"wins"`
}

type TeamRecordTotal struct {
	Games  *int64 `json:"games"`
	Losses *int64 `json:"losses"`
	Ties   *int64 `json:"ties"`
	Wins   *int64 `json:"wins"`
}

type TeamRecord struct {
	AwayGames       *TeamRecordAwayGames       `json:"awayGames"`
	Conference      *string                    `json:"conference"`
	ConferenceGames *TeamRecordConferenceGames `json:"conferenceGames"`
	Division        *string                    `json:"division"`
	HomeGames       *TeamRecordHomeGames       `json:"homeGames"`
	Team            *string                    `json:"team"`
	Total           *TeamRecordTotal           `json:"total"`
	Year            *int64                     `json:"year"`
}
