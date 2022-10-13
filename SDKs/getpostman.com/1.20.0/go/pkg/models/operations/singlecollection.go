package operations

type SingleCollectionPathParams struct {
	CollectionUID string `pathParam:"style=simple,explode=false,name=collection_uid"`
}

type SingleCollectionRequest struct {
	PathParams SingleCollectionPathParams
}

type SingleCollection200ApplicationJSONCollectionInfo struct {
	PostmanID   *string `json:"_postman_id"`
	Description *string `json:"description"`
	Name        *string `json:"name"`
	Schema      *string `json:"schema"`
}

type SingleCollection200ApplicationJSONCollectionItemEventScript struct {
	Exec *string `json:"exec"`
	Type *string `json:"type"`
}

type SingleCollection200ApplicationJSONCollectionItemEvent struct {
	Listen *string                                                      `json:"listen"`
	Script *SingleCollection200ApplicationJSONCollectionItemEventScript `json:"script"`
}

type SingleCollection200ApplicationJSONCollectionItemRequestBody struct {
	Formdata []interface{} `json:"formdata"`
	Mode     *string       `json:"mode"`
}

type SingleCollection200ApplicationJSONCollectionItemRequestHeader struct {
	Description *string `json:"description"`
	Key         *string `json:"key"`
	Value       *string `json:"value"`
}

type SingleCollection200ApplicationJSONCollectionItemRequest struct {
	Body        *SingleCollection200ApplicationJSONCollectionItemRequestBody    `json:"body"`
	Description *string                                                         `json:"description"`
	Header      []SingleCollection200ApplicationJSONCollectionItemRequestHeader `json:"header"`
	Method      *string                                                         `json:"method"`
	URL         *string                                                         `json:"url"`
}

type SingleCollection200ApplicationJSONCollectionItem struct {
	Event    []SingleCollection200ApplicationJSONCollectionItemEvent  `json:"event"`
	ID       *string                                                  `json:"id"`
	Name     *string                                                  `json:"name"`
	Request  *SingleCollection200ApplicationJSONCollectionItemRequest `json:"request"`
	Response []interface{}                                            `json:"response"`
}

type SingleCollection200ApplicationJSONCollection struct {
	Info      *SingleCollection200ApplicationJSONCollectionInfo  `json:"info"`
	Item      []SingleCollection200ApplicationJSONCollectionItem `json:"item"`
	Variables []interface{}                                      `json:"variables"`
}

type SingleCollection200ApplicationJSON struct {
	Collection *SingleCollection200ApplicationJSONCollection `json:"collection"`
}

type SingleCollectionResponse struct {
	ContentType                              string
	StatusCode                               int64
	SingleCollection200ApplicationJSONObject *SingleCollection200ApplicationJSON
}
