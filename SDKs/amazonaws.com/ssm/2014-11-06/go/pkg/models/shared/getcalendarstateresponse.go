package shared



type GetCalendarStateResponse struct {
    AtTime *string `json:"AtTime,omitempty"`
    NextTransitionTime *string `json:"NextTransitionTime,omitempty"`
    State *CalendarStateEnum `json:"State,omitempty"`
    
}

