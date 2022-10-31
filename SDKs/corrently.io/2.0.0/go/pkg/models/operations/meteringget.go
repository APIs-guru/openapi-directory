package operations

type MeteringGetQueryParams struct {
	Account *string `queryParam:"style=form,explode=true,name=account"`
}

type MeteringGetRequest struct {
	QueryParams MeteringGetQueryParams
}

type MeteringGet200ApplicationJSON struct {
	One80          *int64       `json:"1.8.0,omitempty"`
	One81          *int64       `json:"1.8.1,omitempty"`
	One82          *int64       `json:"1.8.2,omitempty"`
	ProcessingTime *int64       `json:"_processingTime,omitempty"`
	Account        *string      `json:"account,omitempty"`
	Co2GOekostrom  *int64       `json:"co2_g_oekostrom,omitempty"`
	Co2GStandard   *int64       `json:"co2_g_standard,omitempty"`
	Credits        *interface{} `json:"credits,omitempty"`
	TimeStamp      *int64       `json:"timeStamp,omitempty"`
	TTL            *int64       `json:"ttl,omitempty"`
}

type MeteringGetResponse struct {
	ContentType                         string
	StatusCode                          int64
	MeteringGet200ApplicationJSONObject *MeteringGet200ApplicationJSON
}
