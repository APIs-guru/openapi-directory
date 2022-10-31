package shared



type PlayerGamePpaAveragePpa struct {
    All *float64 `json:"all,omitempty"`
    Pass *float64 `json:"pass,omitempty"`
    Rush *float64 `json:"rush,omitempty"`
    
}

type PlayerGamePpa struct {
    AveragePpa *PlayerGamePpaAveragePpa `json:"averagePPA,omitempty"`
    Name *string `json:"name,omitempty"`
    Opponent *string `json:"opponent,omitempty"`
    Position *string `json:"position,omitempty"`
    Season *int64 `json:"season,omitempty"`
    Team *string `json:"team,omitempty"`
    Week *int64 `json:"week,omitempty"`
    
}

