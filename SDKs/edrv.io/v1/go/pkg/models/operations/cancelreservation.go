package operations

type CancelreservationRequestBody struct {
	Reservation *string `json:"reservation"`
}

type CancelreservationRequest struct {
	Request CancelreservationRequestBody `request:"mediaType=application/json"`
}

type Cancelreservation201ApplicationJSON struct {
	Message *string                `json:"message"`
	Ok      *bool                  `json:"ok"`
	Result  map[string]interface{} `json:"result"`
}

type CancelreservationResponse struct {
	ContentType                               string
	StatusCode                                int64
	Cancelreservation201ApplicationJSONObject *Cancelreservation201ApplicationJSON
}
