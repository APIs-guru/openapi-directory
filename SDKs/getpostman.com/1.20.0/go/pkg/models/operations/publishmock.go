package operations

type PublishMockPathParams struct {
	MockUID string `pathParam:"style=simple,explode=false,name=mock_uid"`
}

type PublishMockRequest struct {
	PathParams PublishMockPathParams
}

type PublishMock200ApplicationJSONMock struct {
	ID *string `json:"id"`
}

type PublishMock200ApplicationJSON struct {
	Mock *PublishMock200ApplicationJSONMock `json:"mock"`
}

type PublishMockResponse struct {
	ContentType                         string
	StatusCode                          int64
	PublishMock200ApplicationJSONObject *PublishMock200ApplicationJSON
}
