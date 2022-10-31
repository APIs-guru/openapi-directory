package shared



type DriveEndTime struct {
    Minutes *int64 `json:"minutes,omitempty"`
    Seconds *int64 `json:"seconds,omitempty"`
    
}

type DriveStartTime struct {
    Minutes *int64 `json:"minutes,omitempty"`
    Seconds *int64 `json:"seconds,omitempty"`
    
}

type Drive struct {
    Defense *string `json:"defense,omitempty"`
    DefenseConference *string `json:"defense_conference,omitempty"`
    DriveNumber *int64 `json:"drive_number,omitempty"`
    DriveResult *string `json:"drive_result,omitempty"`
    EndDefenseScore *int64 `json:"end_defense_score,omitempty"`
    EndOffenseScore *int64 `json:"end_offense_score,omitempty"`
    EndPeriod *int64 `json:"end_period,omitempty"`
    EndTime *DriveEndTime `json:"end_time,omitempty"`
    EndYardline *int64 `json:"end_yardline,omitempty"`
    EndYardsToGoal *int64 `json:"end_yards_to_goal,omitempty"`
    GameID *int64 `json:"game_id,omitempty"`
    ID *int64 `json:"id,omitempty"`
    IsHomeOffense *bool `json:"is_home_offense,omitempty"`
    Offense *string `json:"offense,omitempty"`
    OffenseConference *string `json:"offense_conference,omitempty"`
    Plays *int64 `json:"plays,omitempty"`
    Scoring *bool `json:"scoring,omitempty"`
    StartDefenseScore *int64 `json:"start_defense_score,omitempty"`
    StartOffenseScore *int64 `json:"start_offense_score,omitempty"`
    StartPeriod *int64 `json:"start_period,omitempty"`
    StartTime *DriveStartTime `json:"start_time,omitempty"`
    StartYardline *int64 `json:"start_yardline,omitempty"`
    StartYardsToGoal *int64 `json:"start_yards_to_goal,omitempty"`
    Yards *int64 `json:"yards,omitempty"`
    
}

