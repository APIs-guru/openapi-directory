package shared

type Game struct {
	Attendance      *int64   `json:"attendance,omitempty"`
	AwayConference  *string  `json:"away_conference,omitempty"`
	AwayID          *int64   `json:"away_id,omitempty"`
	AwayLineScores  []int64  `json:"away_line_scores,omitempty"`
	AwayPoints      *int64   `json:"away_points,omitempty"`
	AwayPostWinProb *float64 `json:"away_post_win_prob,omitempty"`
	AwayTeam        *string  `json:"away_team,omitempty"`
	ConferenceGame  *bool    `json:"conference_game,omitempty"`
	ExcitementIndex *float64 `json:"excitement_index,omitempty"`
	Highlights      *string  `json:"highlights,omitempty"`
	HomeConference  *string  `json:"home_conference,omitempty"`
	HomeID          *int64   `json:"home_id,omitempty"`
	HomeLineScores  []int64  `json:"home_line_scores,omitempty"`
	HomePoints      *int64   `json:"home_points,omitempty"`
	HomePostWinProb *float64 `json:"home_post_win_prob,omitempty"`
	HomeTeam        *string  `json:"home_team,omitempty"`
	ID              *int64   `json:"id,omitempty"`
	NeutralSite     *bool    `json:"neutral_site,omitempty"`
	Notes           *string  `json:"notes,omitempty"`
	Season          *int64   `json:"season,omitempty"`
	SeasonType      *string  `json:"season_type,omitempty"`
	StartDate       *string  `json:"start_date,omitempty"`
	StartTimeTbd    *bool    `json:"start_time_tbd,omitempty"`
	Venue           *string  `json:"venue,omitempty"`
	VenueID         *int64   `json:"venue_id,omitempty"`
	Week            *int64   `json:"week,omitempty"`
}
