package operations

type UpdateCollectionPathParams struct {
	CollectionUID string `pathParam:"style=simple,explode=false,name=collection_uid"`
}

type UpdateCollectionRequestBodyCollectionInfo struct {
	PostmanID   *string `json:"_postman_id"`
	Description *string `json:"description"`
	Name        *string `json:"name"`
	Schema      *string `json:"schema"`
}

type UpdateCollectionRequestBodyCollectionItemItemRequestBody struct {
	Mode *string `json:"mode"`
	Raw  *string `json:"raw"`
}

type UpdateCollectionRequestBodyCollectionItemItemRequestHeader struct {
	Key   *string `json:"key"`
	Value *string `json:"value"`
}

type UpdateCollectionRequestBodyCollectionItemItemRequest struct {
	Body        *UpdateCollectionRequestBodyCollectionItemItemRequestBody    `json:"body"`
	Description *string                                                      `json:"description"`
	Header      []UpdateCollectionRequestBodyCollectionItemItemRequestHeader `json:"header"`
	Method      *string                                                      `json:"method"`
	URL         *string                                                      `json:"url"`
}

type UpdateCollectionRequestBodyCollectionItemItem struct {
	Name    *string                                               `json:"name"`
	Request *UpdateCollectionRequestBodyCollectionItemItemRequest `json:"request"`
}

type UpdateCollectionRequestBodyCollectionItem struct {
	Item []UpdateCollectionRequestBodyCollectionItemItem `json:"item"`
	Name *string                                         `json:"name"`
}

type UpdateCollectionRequestBodyCollection struct {
	Info *UpdateCollectionRequestBodyCollectionInfo  `json:"info"`
	Item []UpdateCollectionRequestBodyCollectionItem `json:"item"`
}

type UpdateCollectionRequestBody struct {
	Collection *UpdateCollectionRequestBodyCollection `json:"collection"`
}

type UpdateCollectionRequest struct {
	PathParams UpdateCollectionPathParams
	Request    *UpdateCollectionRequestBody `request:"mediaType=application/json"`
}

type UpdateCollection200ApplicationJSONCollection struct {
	ID   *string `json:"id"`
	Name *string `json:"name"`
	UID  *string `json:"uid"`
}

type UpdateCollection200ApplicationJSON struct {
	Collection *UpdateCollection200ApplicationJSONCollection `json:"collection"`
}

type UpdateCollection400ApplicationJSONError struct {
	Message *string `json:"message"`
	Name    *string `json:"name"`
}

type UpdateCollection400ApplicationJSON struct {
	Error *UpdateCollection400ApplicationJSONError `json:"error"`
}

type UpdateCollection403ApplicationJSONError struct {
	Message *string `json:"message"`
	Name    *string `json:"name"`
}

type UpdateCollection403ApplicationJSON struct {
	Error *UpdateCollection403ApplicationJSONError `json:"error"`
}

type UpdateCollection404ApplicationJSONErrorDetails struct {
	ID   *string `json:"id"`
	Item *string `json:"item"`
}

type UpdateCollection404ApplicationJSONError struct {
	Details *UpdateCollection404ApplicationJSONErrorDetails `json:"details"`
	Message *string                                         `json:"message"`
	Name    *string                                         `json:"name"`
}

type UpdateCollection404ApplicationJSON struct {
	Error *UpdateCollection404ApplicationJSONError `json:"error"`
}

type UpdateCollectionResponse struct {
	ContentType                              string
	StatusCode                               int64
	UpdateCollection200ApplicationJSONObject *UpdateCollection200ApplicationJSON
	UpdateCollection400ApplicationJSONObject *UpdateCollection400ApplicationJSON
	UpdateCollection403ApplicationJSONObject *UpdateCollection403ApplicationJSON
	UpdateCollection404ApplicationJSONObject *UpdateCollection404ApplicationJSON
}
