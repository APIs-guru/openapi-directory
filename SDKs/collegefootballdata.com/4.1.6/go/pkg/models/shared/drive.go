package shared

type DriveEndTime struct {
	Minutes *int64 `json:"minutes"`
	Seconds *int64 `json:"seconds"`
}

type DriveStartTime struct {
	Minutes *int64 `json:"minutes"`
	Seconds *int64 `json:"seconds"`
}

type Drive struct {
	Defense           *string         `json:"defense"`
	DefenseConference *string         `json:"defense_conference"`
	DriveNumber       *int64          `json:"drive_number"`
	DriveResult       *string         `json:"drive_result"`
	EndDefenseScore   *int64          `json:"end_defense_score"`
	EndOffenseScore   *int64          `json:"end_offense_score"`
	EndPeriod         *int64          `json:"end_period"`
	EndTime           *DriveEndTime   `json:"end_time"`
	EndYardline       *int64          `json:"end_yardline"`
	EndYardsToGoal    *int64          `json:"end_yards_to_goal"`
	GameID            *int64          `json:"game_id"`
	ID                *int64          `json:"id"`
	IsHomeOffense     *bool           `json:"is_home_offense"`
	Offense           *string         `json:"offense"`
	OffenseConference *string         `json:"offense_conference"`
	Plays             *int64          `json:"plays"`
	Scoring           *bool           `json:"scoring"`
	StartDefenseScore *int64          `json:"start_defense_score"`
	StartOffenseScore *int64          `json:"start_offense_score"`
	StartPeriod       *int64          `json:"start_period"`
	StartTime         *DriveStartTime `json:"start_time"`
	StartYardline     *int64          `json:"start_yardline"`
	StartYardsToGoal  *int64          `json:"start_yards_to_goal"`
	Yards             *int64          `json:"yards"`
}
