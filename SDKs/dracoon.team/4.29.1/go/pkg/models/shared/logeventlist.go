package shared



type LogEventList struct {
    Items []LogEvent `json:"items"`
    Range Range `json:"range"`
    
}

