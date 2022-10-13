package shared

type GetCalendarStateResponse struct {
	AtTime             *string            `json:"AtTime"`
	NextTransitionTime *string            `json:"NextTransitionTime"`
	State              *CalendarStateEnum `json:"State"`
}
