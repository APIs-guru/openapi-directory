package operations

type UnpublishMockPathParams struct {
	MockUID string `pathParam:"style=simple,explode=false,name=mock_uid"`
}

type UnpublishMockRequest struct {
	PathParams UnpublishMockPathParams
}

type UnpublishMock200ApplicationJSONMock struct {
	ID *string `json:"id"`
}

type UnpublishMock200ApplicationJSON struct {
	Mock *UnpublishMock200ApplicationJSONMock `json:"mock"`
}

type UnpublishMockResponse struct {
	ContentType                           string
	StatusCode                            int64
	UnpublishMock200ApplicationJSONObject *UnpublishMock200ApplicationJSON
}
