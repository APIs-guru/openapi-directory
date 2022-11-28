package operations

type PublishMockPathParams struct {
	MockUID string `pathParam:"style=simple,explode=false,name=mock_uid"`
}

type PublishMock200ApplicationJSONMock struct {
	ID *string `json:"id,omitempty"`
}

type PublishMock200ApplicationJSON struct {
	Mock *PublishMock200ApplicationJSONMock `json:"mock,omitempty"`
}

type PublishMockRequest struct {
	PathParams PublishMockPathParams
}

type PublishMockResponse struct {
	ContentType                         string
	StatusCode                          int64
	PublishMock200ApplicationJSONObject *PublishMock200ApplicationJSON
}
