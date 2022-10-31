package operations

type SingleCollectionPathParams struct {
	CollectionUID string `pathParam:"style=simple,explode=false,name=collection_uid"`
}

type SingleCollectionRequest struct {
	PathParams SingleCollectionPathParams
}

type SingleCollection200ApplicationJSONCollectionInfo struct {
	PostmanID   *string `json:"_postman_id,omitempty"`
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
	Schema      *string `json:"schema,omitempty"`
}

type SingleCollection200ApplicationJSONCollectionItemEventScript struct {
	Exec *string `json:"exec,omitempty"`
	Type *string `json:"type,omitempty"`
}

type SingleCollection200ApplicationJSONCollectionItemEvent struct {
	Listen *string                                                      `json:"listen,omitempty"`
	Script *SingleCollection200ApplicationJSONCollectionItemEventScript `json:"script,omitempty"`
}

type SingleCollection200ApplicationJSONCollectionItemRequestBody struct {
	Formdata []interface{} `json:"formdata,omitempty"`
	Mode     *string       `json:"mode,omitempty"`
}

type SingleCollection200ApplicationJSONCollectionItemRequestHeader struct {
	Description *string `json:"description,omitempty"`
	Key         *string `json:"key,omitempty"`
	Value       *string `json:"value,omitempty"`
}

type SingleCollection200ApplicationJSONCollectionItemRequest struct {
	Body        *SingleCollection200ApplicationJSONCollectionItemRequestBody    `json:"body,omitempty"`
	Description *string                                                         `json:"description,omitempty"`
	Header      []SingleCollection200ApplicationJSONCollectionItemRequestHeader `json:"header,omitempty"`
	Method      *string                                                         `json:"method,omitempty"`
	URL         *string                                                         `json:"url,omitempty"`
}

type SingleCollection200ApplicationJSONCollectionItem struct {
	Event    []SingleCollection200ApplicationJSONCollectionItemEvent  `json:"event,omitempty"`
	ID       *string                                                  `json:"id,omitempty"`
	Name     *string                                                  `json:"name,omitempty"`
	Request  *SingleCollection200ApplicationJSONCollectionItemRequest `json:"request,omitempty"`
	Response []interface{}                                            `json:"response,omitempty"`
}

type SingleCollection200ApplicationJSONCollection struct {
	Info      *SingleCollection200ApplicationJSONCollectionInfo  `json:"info,omitempty"`
	Item      []SingleCollection200ApplicationJSONCollectionItem `json:"item,omitempty"`
	Variables []interface{}                                      `json:"variables,omitempty"`
}

type SingleCollection200ApplicationJSON struct {
	Collection *SingleCollection200ApplicationJSONCollection `json:"collection,omitempty"`
}

type SingleCollectionResponse struct {
	ContentType                              string
	StatusCode                               int64
	SingleCollection200ApplicationJSONObject *SingleCollection200ApplicationJSON
}
