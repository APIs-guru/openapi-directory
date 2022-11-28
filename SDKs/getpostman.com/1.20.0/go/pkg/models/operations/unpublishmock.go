package operations

type UnpublishMockPathParams struct {
	MockUID string `pathParam:"style=simple,explode=false,name=mock_uid"`
}

type UnpublishMock200ApplicationJSONMock struct {
	ID *string `json:"id,omitempty"`
}

type UnpublishMock200ApplicationJSON struct {
	Mock *UnpublishMock200ApplicationJSONMock `json:"mock,omitempty"`
}

type UnpublishMockRequest struct {
	PathParams UnpublishMockPathParams
}

type UnpublishMockResponse struct {
	ContentType                           string
	StatusCode                            int64
	UnpublishMock200ApplicationJSONObject *UnpublishMock200ApplicationJSON
}
