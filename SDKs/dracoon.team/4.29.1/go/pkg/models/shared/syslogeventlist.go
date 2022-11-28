package shared

// SyslogEventList
// List of syslog events
type SyslogEventList struct {
	Items []SyslogEvent `json:"items"`
	Range Range         `json:"range"`
}
