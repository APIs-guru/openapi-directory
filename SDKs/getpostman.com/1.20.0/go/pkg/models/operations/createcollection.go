package operations

type CreateCollectionRequestBodyCollectionInfo struct {
	Description *string `json:"description"`
	Name        *string `json:"name"`
	Schema      *string `json:"schema"`
}

type CreateCollectionRequestBodyCollectionItemItemRequestBody struct {
	Mode *string `json:"mode"`
	Raw  *string `json:"raw"`
}

type CreateCollectionRequestBodyCollectionItemItemRequestHeader struct {
	Key   *string `json:"key"`
	Value *string `json:"value"`
}

type CreateCollectionRequestBodyCollectionItemItemRequest struct {
	Body        *CreateCollectionRequestBodyCollectionItemItemRequestBody    `json:"body"`
	Description *string                                                      `json:"description"`
	Header      []CreateCollectionRequestBodyCollectionItemItemRequestHeader `json:"header"`
	Method      *string                                                      `json:"method"`
	URL         *string                                                      `json:"url"`
}

type CreateCollectionRequestBodyCollectionItemItem struct {
	Name    *string                                               `json:"name"`
	Request *CreateCollectionRequestBodyCollectionItemItemRequest `json:"request"`
}

type CreateCollectionRequestBodyCollectionItem struct {
	Item []CreateCollectionRequestBodyCollectionItemItem `json:"item"`
	Name *string                                         `json:"name"`
}

type CreateCollectionRequestBodyCollection struct {
	Info *CreateCollectionRequestBodyCollectionInfo  `json:"info"`
	Item []CreateCollectionRequestBodyCollectionItem `json:"item"`
}

type CreateCollectionRequestBody struct {
	Collection *CreateCollectionRequestBodyCollection `json:"collection"`
}

type CreateCollectionRequest struct {
	Request *CreateCollectionRequestBody `request:"mediaType=application/json"`
}

type CreateCollection200ApplicationJSONCollection struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
	UID  *string `json:"uid"`
}

type CreateCollection200ApplicationJSON struct {
	Collection *CreateCollection200ApplicationJSONCollection `json:"collection"`
}

type CreateCollection400ApplicationJSONError struct {
	Message *string `json:"message"`
	Name    *string `json:"name"`
}

type CreateCollection400ApplicationJSON struct {
	Error *CreateCollection400ApplicationJSONError `json:"error"`
}

type CreateCollectionResponse struct {
	ContentType                              string
	StatusCode                               int64
	CreateCollection200ApplicationJSONObject *CreateCollection200ApplicationJSON
	CreateCollection400ApplicationJSONObject *CreateCollection400ApplicationJSON
}
