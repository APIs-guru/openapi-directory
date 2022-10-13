package operations

type UpdateMockPathParams struct {
	MockUID string `pathParam:"style=simple,explode=false,name=mock_uid"`
}

type UpdateMockRequestBodyMock struct {
	Description *string `json:"description"`
	Environment *string `json:"environment"`
	Name        *string `json:"name"`
	Private     *bool   `json:"private"`
	VersionTag  *string `json:"versionTag"`
}

type UpdateMockRequestBody struct {
	Mock *UpdateMockRequestBodyMock `json:"mock"`
}

type UpdateMockRequest struct {
	PathParams UpdateMockPathParams
	Request    *UpdateMockRequestBody `request:"mediaType=application/json"`
}

type UpdateMock200ApplicationJSONMockConfig struct {
	Headers          []interface{} `json:"headers"`
	MatchBody        *bool         `json:"matchBody"`
	MatchQueryParams *bool         `json:"matchQueryParams"`
	MatchWildcards   *bool         `json:"matchWildcards"`
}

type UpdateMock200ApplicationJSONMock struct {
	Collection  *string                                 `json:"collection"`
	Config      *UpdateMock200ApplicationJSONMockConfig `json:"config"`
	Environment *string                                 `json:"environment"`
	ID          *string                                 `json:"id"`
	MockURL     *string                                 `json:"mockUrl"`
	Name        *string                                 `json:"name"`
	Owner       *string                                 `json:"owner"`
	UID         *string                                 `json:"uid"`
}

type UpdateMock200ApplicationJSON struct {
	Mock *UpdateMock200ApplicationJSONMock `json:"mock"`
}

type UpdateMockResponse struct {
	ContentType                        string
	StatusCode                         int64
	UpdateMock200ApplicationJSONObject *UpdateMock200ApplicationJSON
}
