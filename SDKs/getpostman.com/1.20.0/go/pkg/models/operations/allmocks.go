package operations

type AllMocks200ApplicationJSONMocks struct {
	Collection  *string `json:"collection"`
	Environment *string `json:"environment"`
	ID          *string `json:"id"`
	MockURL     *string `json:"mockUrl"`
	Owner       *string `json:"owner"`
	UID         *string `json:"uid"`
}

type AllMocks200ApplicationJSON struct {
	Mocks []AllMocks200ApplicationJSONMocks `json:"mocks"`
}

type AllMocksResponse struct {
	ContentType                      string
	StatusCode                       int64
	AllMocks200ApplicationJSONObject *AllMocks200ApplicationJSON
}
