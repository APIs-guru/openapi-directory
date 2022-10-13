package operations

type GetTheStatusOfTheAPIService200ApplicationJSON struct {
	Status *bool `json:"status"`
}

type GetTheStatusOfTheAPIServiceResponse struct {
	ContentType                                         string
	GetTheStatusOfTheAPIService200ApplicationJSONObject *GetTheStatusOfTheAPIService200ApplicationJSON
	StatusCode                                          int64
}
