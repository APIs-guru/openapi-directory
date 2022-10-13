package operations

type CreateGroupPadUsingPostQueryParams struct {
	GroupID *string `queryParam:"style=form,explode=true,name=groupID"`
	PadName *string `queryParam:"style=form,explode=true,name=padName"`
	Text    *string `queryParam:"style=form,explode=true,name=text"`
}

type CreateGroupPadUsingPostRequest struct {
	QueryParams CreateGroupPadUsingPostQueryParams
}

type CreateGroupPadUsingPost200ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateGroupPadUsingPost400ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateGroupPadUsingPost401ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateGroupPadUsingPost500ApplicationJSON struct {
	Code    *int64                 `json:"code"`
	Data    map[string]interface{} `json:"data"`
	Message *string                `json:"message"`
}

type CreateGroupPadUsingPostResponse struct {
	ContentType                                     string
	StatusCode                                      int64
	CreateGroupPadUsingPost200ApplicationJSONObject *CreateGroupPadUsingPost200ApplicationJSON
	CreateGroupPadUsingPost400ApplicationJSONObject *CreateGroupPadUsingPost400ApplicationJSON
	CreateGroupPadUsingPost401ApplicationJSONObject *CreateGroupPadUsingPost401ApplicationJSON
	CreateGroupPadUsingPost500ApplicationJSONObject *CreateGroupPadUsingPost500ApplicationJSON
}
