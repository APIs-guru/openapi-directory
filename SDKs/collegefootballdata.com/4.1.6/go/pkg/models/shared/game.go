package shared

type Game struct {
	Attendance      *int64   `json:"attendance"`
	AwayConference  *string  `json:"away_conference"`
	AwayID          *int64   `json:"away_id"`
	AwayLineScores  []int64  `json:"away_line_scores"`
	AwayPoints      *int64   `json:"away_points"`
	AwayPostWinProb *float64 `json:"away_post_win_prob"`
	AwayTeam        *string  `json:"away_team"`
	ConferenceGame  *bool    `json:"conference_game"`
	ExcitementIndex *float64 `json:"excitement_index"`
	Highlights      *string  `json:"highlights"`
	HomeConference  *string  `json:"home_conference"`
	HomeID          *int64   `json:"home_id"`
	HomeLineScores  []int64  `json:"home_line_scores"`
	HomePoints      *int64   `json:"home_points"`
	HomePostWinProb *float64 `json:"home_post_win_prob"`
	HomeTeam        *string  `json:"home_team"`
	ID              *int64   `json:"id"`
	NeutralSite     *bool    `json:"neutral_site"`
	Notes           *string  `json:"notes"`
	Season          *int64   `json:"season"`
	SeasonType      *string  `json:"season_type"`
	StartDate       *string  `json:"start_date"`
	StartTimeTbd    *bool    `json:"start_time_tbd"`
	Venue           *string  `json:"venue"`
	VenueID         *int64   `json:"venue_id"`
	Week            *int64   `json:"week"`
}
