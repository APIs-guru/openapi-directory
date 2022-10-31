package operations



type SingleMockPathParams struct {
    MockUID string `pathParam:"style=simple,explode=false,name=mock_uid"`
    
}

type SingleMockRequest struct {
    PathParams SingleMockPathParams 
    
}

type SingleMock200ApplicationJSONMock struct {
    Collection *string `json:"collection,omitempty"`
    Environment *string `json:"environment,omitempty"`
    ID *string `json:"id,omitempty"`
    MockURL *string `json:"mockUrl,omitempty"`
    Owner *string `json:"owner,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

type SingleMock200ApplicationJSON struct {
    Mock *SingleMock200ApplicationJSONMock `json:"mock,omitempty"`
    
}

type SingleMockResponse struct {
    ContentType string 
    StatusCode int64 
    SingleMock200ApplicationJSONObject *SingleMock200ApplicationJSON 
    
}

