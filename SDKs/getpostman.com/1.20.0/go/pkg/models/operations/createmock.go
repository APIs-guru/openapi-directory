package operations

type CreateMockRequestBodyMock struct {
	Collection  *string `json:"collection"`
	Environment *string `json:"environment"`
}

type CreateMockRequestBody struct {
	Mock *CreateMockRequestBodyMock `json:"mock"`
}

type CreateMockRequest struct {
	Request *CreateMockRequestBody `request:"mediaType=application/json"`
}

type CreateMock200ApplicationJSONMock struct {
	Collection  *string `json:"collection"`
	Environment *string `json:"environment"`
	ID          *string `json:"id"`
	MockURL     *string `json:"mockUrl"`
	Owner       *string `json:"owner"`
	UID         *string `json:"uid"`
}

type CreateMock200ApplicationJSON struct {
	Mock *CreateMock200ApplicationJSONMock `json:"mock"`
}

type CreateMockResponse struct {
	ContentType                        string
	StatusCode                         int64
	CreateMock200ApplicationJSONObject *CreateMock200ApplicationJSON
}
