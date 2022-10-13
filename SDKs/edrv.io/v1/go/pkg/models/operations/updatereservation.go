package operations

type UpdatereservationPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdatereservationRequestBody struct {
	Connector *int64  `json:"connector"`
	Driver    *string `json:"driver"`
	EndDate   *string `json:"endDate"`
	Evse      *int64  `json:"evse"`
}

type UpdatereservationRequest struct {
	PathParams UpdatereservationPathParams
	Request    UpdatereservationRequestBody `request:"mediaType=application/json"`
}

type Updatereservation201ApplicationJSON struct {
	Message *string                `json:"message"`
	Ok      *bool                  `json:"ok"`
	Result  map[string]interface{} `json:"result"`
}

type UpdatereservationResponse struct {
	ContentType                               string
	StatusCode                                int64
	Updatereservation201ApplicationJSONObject *Updatereservation201ApplicationJSON
}
