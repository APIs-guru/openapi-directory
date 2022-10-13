package operations

type DeleteMockPathParams struct {
	MockUID string `pathParam:"style=simple,explode=false,name=mock_uid"`
}

type DeleteMockRequest struct {
	PathParams DeleteMockPathParams
}

type DeleteMock200ApplicationJSONMock struct {
	ID  *string `json:"id"`
	UID *string `json:"uid"`
}

type DeleteMock200ApplicationJSON struct {
	Mock *DeleteMock200ApplicationJSONMock `json:"mock"`
}

type DeleteMockResponse struct {
	ContentType                        string
	StatusCode                         int64
	DeleteMock200ApplicationJSONObject *DeleteMock200ApplicationJSON
}
