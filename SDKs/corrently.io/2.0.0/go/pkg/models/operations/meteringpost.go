package operations

type MeteringPostRequestBody struct {
	One80   *int64  `json:"1.8.0"`
	Account *string `json:"account"`
	Energy  *int64  `json:"energy"`
	Secret  *string `json:"secret"`
	Value   *int64  `json:"value"`
	Zip     *string `json:"zip"`
}

type MeteringPostRequest struct {
	Request MeteringPostRequestBody `request:"mediaType=application/json"`
}

type MeteringPost200ApplicationJSON struct {
	One80          *int64  `json:"1.8.0"`
	One81          *int64  `json:"1.8.1"`
	One82          *int64  `json:"1.8.2"`
	ProcessingTime *int64  `json:"_processingTime"`
	Account        *string `json:"account"`
	Co2GOekostrom  *int64  `json:"co2_g_oekostrom"`
	Co2GStandard   *int64  `json:"co2_g_standard"`
	TimeStamp      *int64  `json:"timeStamp"`
}

type MeteringPostResponse struct {
	ContentType                          string
	StatusCode                           int64
	MeteringPost200ApplicationJSONObject *MeteringPost200ApplicationJSON
}
