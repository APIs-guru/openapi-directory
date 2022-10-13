package shared

type GetCalendarStateRequest struct {
	AtTime        *string  `json:"AtTime"`
	CalendarNames []string `json:"CalendarNames"`
}
