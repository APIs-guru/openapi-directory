package operations

type DeleteCollectionPathParams struct {
	CollectionUID string `pathParam:"style=simple,explode=false,name=collection_uid"`
}

type DeleteCollection200ApplicationJSONCollection struct {
	ID  *string `json:"id,omitempty"`
	UID *string `json:"uid,omitempty"`
}

type DeleteCollection200ApplicationJSON struct {
	Collection *DeleteCollection200ApplicationJSONCollection `json:"collection,omitempty"`
}

type DeleteCollection404ApplicationJSONErrorDetails struct {
	ID   *string `json:"id,omitempty"`
	Item *string `json:"item,omitempty"`
}

type DeleteCollection404ApplicationJSONError struct {
	Details *DeleteCollection404ApplicationJSONErrorDetails `json:"details,omitempty"`
	Message *string                                         `json:"message,omitempty"`
	Name    *string                                         `json:"name,omitempty"`
}

type DeleteCollection404ApplicationJSON struct {
	Error *DeleteCollection404ApplicationJSONError `json:"error,omitempty"`
}

type DeleteCollectionRequest struct {
	PathParams DeleteCollectionPathParams
}

type DeleteCollectionResponse struct {
	ContentType                              string
	StatusCode                               int64
	DeleteCollection200ApplicationJSONObject *DeleteCollection200ApplicationJSON
	DeleteCollection404ApplicationJSONObject *DeleteCollection404ApplicationJSON
}
