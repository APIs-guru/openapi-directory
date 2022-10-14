package shared

type PlayClock struct {
	Minutes *int64 `json:"minutes,omitempty"`
	Seconds *int64 `json:"seconds,omitempty"`
}

type Play struct {
	Away              *string    `json:"away,omitempty"`
	Clock             *PlayClock `json:"clock,omitempty"`
	Defense           *string    `json:"defense,omitempty"`
	DefenseConference *string    `json:"defense_conference,omitempty"`
	DefenseScore      *int64     `json:"defense_score,omitempty"`
	DefenseTimeouts   *int64     `json:"defense_timeouts,omitempty"`
	Distance          *int64     `json:"distance,omitempty"`
	Down              *int64     `json:"down,omitempty"`
	DriveID           *int64     `json:"drive_id,omitempty"`
	DriveNumber       *int64     `json:"drive_number,omitempty"`
	GameID            *int64     `json:"game_id,omitempty"`
	Home              *string    `json:"home,omitempty"`
	ID                *int64     `json:"id,omitempty"`
	Offense           *string    `json:"offense,omitempty"`
	OffenseConference *string    `json:"offense_conference,omitempty"`
	OffenseScore      *int64     `json:"offense_score,omitempty"`
	OffenseTimeouts   *int64     `json:"offense_timeouts,omitempty"`
	Period            *int64     `json:"period,omitempty"`
	PlayNumber        *int64     `json:"play_number,omitempty"`
	PlayText          *string    `json:"play_text,omitempty"`
	PlayType          *string    `json:"play_type,omitempty"`
	Ppa               *float64   `json:"ppa,omitempty"`
	Scoring           *bool      `json:"scoring,omitempty"`
	Wallclock         *string    `json:"wallclock,omitempty"`
	YardLine          *int64     `json:"yard_line,omitempty"`
	YardsGained       *int64     `json:"yards_gained,omitempty"`
	YardsToGoal       *int64     `json:"yards_to_goal,omitempty"`
}
