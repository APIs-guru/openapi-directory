package operations

type SingleMockPathParams struct {
	MockUID string `pathParam:"style=simple,explode=false,name=mock_uid"`
}

type SingleMockRequest struct {
	PathParams SingleMockPathParams
}

type SingleMock200ApplicationJSONMock struct {
	Collection  *string `json:"collection"`
	Environment *string `json:"environment"`
	ID          *string `json:"id"`
	MockURL     *string `json:"mockUrl"`
	Owner       *string `json:"owner"`
	UID         *string `json:"uid"`
}

type SingleMock200ApplicationJSON struct {
	Mock *SingleMock200ApplicationJSONMock `json:"mock"`
}

type SingleMockResponse struct {
	ContentType                        string
	StatusCode                         int64
	SingleMock200ApplicationJSONObject *SingleMock200ApplicationJSON
}
