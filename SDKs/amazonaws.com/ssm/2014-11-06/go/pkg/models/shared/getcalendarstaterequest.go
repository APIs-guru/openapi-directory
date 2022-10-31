package shared



type GetCalendarStateRequest struct {
    AtTime *string `json:"AtTime,omitempty"`
    CalendarNames []string `json:"CalendarNames"`
    
}

