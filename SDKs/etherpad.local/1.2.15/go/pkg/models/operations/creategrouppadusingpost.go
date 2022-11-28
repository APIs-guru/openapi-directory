package operations

type CreateGroupPadUsingPostQueryParams struct {
	GroupID *string `queryParam:"style=form,explode=true,name=groupID"`
	PadName *string `queryParam:"style=form,explode=true,name=padName"`
	Text    *string `queryParam:"style=form,explode=true,name=text"`
}

type CreateGroupPadUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupPadUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupPadUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupPadUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code,omitempty"`
	Data    map[string]interface{} `json:"data,omitempty"`
	Message *string                `json:"message,omitempty"`
}

type CreateGroupPadUsingPostRequest struct {
	QueryParams CreateGroupPadUsingPostQueryParams
}

type CreateGroupPadUsingPostResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	CreateGroupPadUsingPost200ApplicationJSONObject *CreateGroupPadUsingPost200ApplicationJSON
	CreateGroupPadUsingPost400ApplicationJSONObject *CreateGroupPadUsingPost400ApplicationJSON
	CreateGroupPadUsingPost401ApplicationJSONObject *CreateGroupPadUsingPost401ApplicationJSON
	CreateGroupPadUsingPost500ApplicationJSONObject *CreateGroupPadUsingPost500ApplicationJSON
}
