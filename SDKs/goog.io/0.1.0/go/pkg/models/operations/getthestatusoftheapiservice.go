package operations

type GetTheStatusOfTheAPIService200ApplicationJSON struct {
	Status *bool `json:"status,omitempty"`
}

type GetTheStatusOfTheAPIServiceResponse struct {
	ContentType                                         string
	GetTheStatusOfTheAPIService200ApplicationJSONObject *GetTheStatusOfTheAPIService200ApplicationJSON
	StatusCode                                          int64
}
