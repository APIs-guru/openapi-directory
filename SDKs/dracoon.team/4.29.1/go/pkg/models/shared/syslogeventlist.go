package shared



type SyslogEventList struct {
    Items []SyslogEvent `json:"items"`
    Range Range `json:"range"`
    
}

