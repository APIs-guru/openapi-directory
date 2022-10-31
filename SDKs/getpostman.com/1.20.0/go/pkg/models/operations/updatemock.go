package operations



type UpdateMockPathParams struct {
    MockUID string `pathParam:"style=simple,explode=false,name=mock_uid"`
    
}

type UpdateMockRequestBodyMock struct {
    Description *string `json:"description,omitempty"`
    Environment *string `json:"environment,omitempty"`
    Name *string `json:"name,omitempty"`
    Private *bool `json:"private,omitempty"`
    VersionTag *string `json:"versionTag,omitempty"`
    
}

type UpdateMockRequestBody struct {
    Mock *UpdateMockRequestBodyMock `json:"mock,omitempty"`
    
}

type UpdateMockRequest struct {
    PathParams UpdateMockPathParams 
    Request *UpdateMockRequestBody `request:"mediaType=application/json"`
    
}

type UpdateMock200ApplicationJSONMockConfig struct {
    Headers []interface{} `json:"headers,omitempty"`
    MatchBody *bool `json:"matchBody,omitempty"`
    MatchQueryParams *bool `json:"matchQueryParams,omitempty"`
    MatchWildcards *bool `json:"matchWildcards,omitempty"`
    
}

type UpdateMock200ApplicationJSONMock struct {
    Collection *string `json:"collection,omitempty"`
    Config *UpdateMock200ApplicationJSONMockConfig `json:"config,omitempty"`
    Environment *string `json:"environment,omitempty"`
    ID *string `json:"id,omitempty"`
    MockURL *string `json:"mockUrl,omitempty"`
    Name *string `json:"name,omitempty"`
    Owner *string `json:"owner,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

type UpdateMock200ApplicationJSON struct {
    Mock *UpdateMock200ApplicationJSONMock `json:"mock,omitempty"`
    
}

type UpdateMockResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateMock200ApplicationJSONObject *UpdateMock200ApplicationJSON 
    
}

