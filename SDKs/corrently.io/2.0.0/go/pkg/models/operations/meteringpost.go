package operations

type MeteringPostRequestBody struct {
	One80   *int64  `json:"1.8.0,omitempty"`
	Account *string `json:"account,omitempty"`
	Energy  *int64  `json:"energy,omitempty"`
	Secret  *string `json:"secret,omitempty"`
	Value   *int64  `json:"value,omitempty"`
	Zip     *string `json:"zip,omitempty"`
}

type MeteringPost200ApplicationJSON struct {
	One80          *int64  `json:"1.8.0,omitempty"`
	One81          *int64  `json:"1.8.1,omitempty"`
	One82          *int64  `json:"1.8.2,omitempty"`
	ProcessingTime *int64  `json:"_processingTime,omitempty"`
	Account        *string `json:"account,omitempty"`
	Co2GOekostrom  *int64  `json:"co2_g_oekostrom,omitempty"`
	Co2GStandard   *int64  `json:"co2_g_standard,omitempty"`
	TimeStamp      *int64  `json:"timeStamp,omitempty"`
}

type MeteringPostRequest struct {
	Request MeteringPostRequestBody `request:"mediaType=application/json"`
}

type MeteringPostResponse struct {
	ContentType                          string
	StatusCode                           int64
	MeteringPost200ApplicationJSONObject *MeteringPost200ApplicationJSON
}
