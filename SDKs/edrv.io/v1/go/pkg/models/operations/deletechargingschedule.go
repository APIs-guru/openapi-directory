package operations

type DeletechargingscheduleRequestBody struct {
	ID *string `json:"id"`
}

type DeletechargingscheduleRequest struct {
	Request DeletechargingscheduleRequestBody `request:"mediaType=application/json"`
}

type Deletechargingschedule201ApplicationJSON struct {
	Command map[string]interface{} `json:"command"`
	Message *string                `json:"message"`
	Ok      *bool                  `json:"ok"`
}

type DeletechargingscheduleResponse struct {
	ContentType                                    string
	StatusCode                                     int64
	Deletechargingschedule201ApplicationJSONObject *Deletechargingschedule201ApplicationJSON
}
