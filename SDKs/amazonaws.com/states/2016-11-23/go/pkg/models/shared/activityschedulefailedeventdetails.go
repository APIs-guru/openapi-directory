package shared

type ActivityScheduleFailedEventDetails struct {
	Cause *string `json:"cause"`
	Error *string `json:"error"`
}
