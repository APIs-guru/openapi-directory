package operations

type MeteringGetQueryParams struct {
	Account *string `queryParam:"style=form,explode=true,name=account"`
}

type MeteringGetRequest struct {
	QueryParams MeteringGetQueryParams
}

type MeteringGet200ApplicationJSON struct {
	One80          *int64       `json:"1.8.0"`
	One81          *int64       `json:"1.8.1"`
	One82          *int64       `json:"1.8.2"`
	ProcessingTime *int64       `json:"_processingTime"`
	Account        *string      `json:"account"`
	Co2GOekostrom  *int64       `json:"co2_g_oekostrom"`
	Co2GStandard   *int64       `json:"co2_g_standard"`
	Credits        *interface{} `json:"credits"`
	TimeStamp      *int64       `json:"timeStamp"`
	TTL            *int64       `json:"ttl"`
}

type MeteringGetResponse struct {
	ContentType                         string
	StatusCode                          int64
	MeteringGet200ApplicationJSONObject *MeteringGet200ApplicationJSON
}
