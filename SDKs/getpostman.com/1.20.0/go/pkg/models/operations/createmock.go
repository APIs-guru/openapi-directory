package operations

type CreateMockRequestBodyMock struct {
	Collection  *string `json:"collection,omitempty"`
	Environment *string `json:"environment,omitempty"`
}

type CreateMockRequestBody struct {
	Mock *CreateMockRequestBodyMock `json:"mock,omitempty"`
}

type CreateMockRequest struct {
	Request *CreateMockRequestBody `request:"mediaType=application/json"`
}

type CreateMock200ApplicationJSONMock struct {
	Collection  *string `json:"collection,omitempty"`
	Environment *string `json:"environment,omitempty"`
	ID          *string `json:"id,omitempty"`
	MockURL     *string `json:"mockUrl,omitempty"`
	Owner       *string `json:"owner,omitempty"`
	UID         *string `json:"uid,omitempty"`
}

type CreateMock200ApplicationJSON struct {
	Mock *CreateMock200ApplicationJSONMock `json:"mock,omitempty"`
}

type CreateMockResponse struct {
	ContentType                        string
	StatusCode                         int64
	CreateMock200ApplicationJSONObject *CreateMock200ApplicationJSON
}
