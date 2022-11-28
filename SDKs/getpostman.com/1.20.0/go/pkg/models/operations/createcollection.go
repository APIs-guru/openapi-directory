package operations

type CreateCollectionRequestBodyCollectionInfo struct {
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
	Schema      *string `json:"schema,omitempty"`
}

type CreateCollectionRequestBodyCollectionItemItemRequestBody struct {
	Mode *string `json:"mode,omitempty"`
	Raw  *string `json:"raw,omitempty"`
}

type CreateCollectionRequestBodyCollectionItemItemRequestHeader struct {
	Key   *string `json:"key,omitempty"`
	Value *string `json:"value,omitempty"`
}

type CreateCollectionRequestBodyCollectionItemItemRequest struct {
	Body        *CreateCollectionRequestBodyCollectionItemItemRequestBody    `json:"body,omitempty"`
	Description *string                                                      `json:"description,omitempty"`
	Header      []CreateCollectionRequestBodyCollectionItemItemRequestHeader `json:"header,omitempty"`
	Method      *string                                                      `json:"method,omitempty"`
	URL         *string                                                      `json:"url,omitempty"`
}

type CreateCollectionRequestBodyCollectionItemItem struct {
	Name    *string                                               `json:"name,omitempty"`
	Request *CreateCollectionRequestBodyCollectionItemItemRequest `json:"request,omitempty"`
}

type CreateCollectionRequestBodyCollectionItem struct {
	Item []CreateCollectionRequestBodyCollectionItemItem `json:"item,omitempty"`
	Name *string                                         `json:"name,omitempty"`
}

type CreateCollectionRequestBodyCollection struct {
	Info *CreateCollectionRequestBodyCollectionInfo  `json:"info,omitempty"`
	Item []CreateCollectionRequestBodyCollectionItem `json:"item,omitempty"`
}

type CreateCollectionRequestBody struct {
	Collection *CreateCollectionRequestBodyCollection `json:"collection,omitempty"`
}

type CreateCollection200ApplicationJSONCollection struct {
	ID   *string `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	UID  *string `json:"uid,omitempty"`
}

type CreateCollection200ApplicationJSON struct {
	Collection *CreateCollection200ApplicationJSONCollection `json:"collection,omitempty"`
}

type CreateCollection400ApplicationJSONError struct {
	Message *string `json:"message,omitempty"`
	Name    *string `json:"name,omitempty"`
}

type CreateCollection400ApplicationJSON struct {
	Error *CreateCollection400ApplicationJSONError `json:"error,omitempty"`
}

type CreateCollectionRequest struct {
	Request *CreateCollectionRequestBody `request:"mediaType=application/json"`
}

type CreateCollectionResponse struct {
	ContentType                              string
	StatusCode                               int64
	CreateCollection200ApplicationJSONObject *CreateCollection200ApplicationJSON
	CreateCollection400ApplicationJSONObject *CreateCollection400ApplicationJSON
}
