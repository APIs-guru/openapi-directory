package shared

type PlayClock struct {
	Minutes *int64 `json:"minutes"`
	Seconds *int64 `json:"seconds"`
}

type Play struct {
	Away              *string    `json:"away"`
	Clock             *PlayClock `json:"clock"`
	Defense           *string    `json:"defense"`
	DefenseConference *string    `json:"defense_conference"`
	DefenseScore      *int64     `json:"defense_score"`
	DefenseTimeouts   *int64     `json:"defense_timeouts"`
	Distance          *int64     `json:"distance"`
	Down              *int64     `json:"down"`
	DriveID           *int64     `json:"drive_id"`
	DriveNumber       *int64     `json:"drive_number"`
	GameID            *int64     `json:"game_id"`
	Home              *string    `json:"home"`
	ID                *int64     `json:"id"`
	Offense           *string    `json:"offense"`
	OffenseConference *string    `json:"offense_conference"`
	OffenseScore      *int64     `json:"offense_score"`
	OffenseTimeouts   *int64     `json:"offense_timeouts"`
	Period            *int64     `json:"period"`
	PlayNumber        *int64     `json:"play_number"`
	PlayText          *string    `json:"play_text"`
	PlayType          *string    `json:"play_type"`
	Ppa               *float64   `json:"ppa"`
	Scoring           *bool      `json:"scoring"`
	Wallclock         *string    `json:"wallclock"`
	YardLine          *int64     `json:"yard_line"`
	YardsGained       *int64     `json:"yards_gained"`
	YardsToGoal       *int64     `json:"yards_to_goal"`
}
