package operations

type DeleteCollectionPathParams struct {
	CollectionUID string `pathParam:"style=simple,explode=false,name=collection_uid"`
}

type DeleteCollectionRequest struct {
	PathParams DeleteCollectionPathParams
}

type DeleteCollection200ApplicationJSONCollection struct {
	ID  *string `json:"id"`
	UID *string `json:"uid"`
}

type DeleteCollection200ApplicationJSON struct {
	Collection *DeleteCollection200ApplicationJSONCollection `json:"collection"`
}

type DeleteCollection404ApplicationJSONErrorDetails struct {
	ID   *string `json:"id"`
	Item *string `json:"item"`
}

type DeleteCollection404ApplicationJSONError struct {
	Details *DeleteCollection404ApplicationJSONErrorDetails `json:"details"`
	Message *string                                         `json:"message"`
	Name    *string                                         `json:"name"`
}

type DeleteCollection404ApplicationJSON struct {
	Error *DeleteCollection404ApplicationJSONError `json:"error"`
}

type DeleteCollectionResponse struct {
	ContentType                              string
	StatusCode                               int64
	DeleteCollection200ApplicationJSONObject *DeleteCollection200ApplicationJSON
	DeleteCollection404ApplicationJSONObject *DeleteCollection404ApplicationJSON
}
