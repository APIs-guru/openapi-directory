package operations

type SetchargingscheduleRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type Setchargingschedule201ApplicationJSON struct {
	Command map[string]interface{} `json:"command"`
	Message *string                `json:"message"`
	Ok      *bool                  `json:"ok"`
}

type SetchargingscheduleResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	Setchargingschedule201ApplicationJSONObject *Setchargingschedule201ApplicationJSON
}
