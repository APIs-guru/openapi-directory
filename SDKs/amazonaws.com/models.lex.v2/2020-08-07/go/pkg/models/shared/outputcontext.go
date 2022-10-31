package shared



type OutputContext struct {
    Name string `json:"name"`
    TimeToLiveInSeconds int64 `json:"timeToLiveInSeconds"`
    TurnsToLive int64 `json:"turnsToLive"`
    
}

