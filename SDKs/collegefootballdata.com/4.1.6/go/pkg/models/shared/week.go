package shared



type Week struct {
    FirstGameStart *string `json:"firstGameStart,omitempty"`
    LastGameStart *string `json:"lastGameStart,omitempty"`
    Season *int64 `json:"season,omitempty"`
    SeasonType *string `json:"seasonType,omitempty"`
    Week *int64 `json:"week,omitempty"`
    
}

