package operations

type AllCollections200ApplicationJSONCollections struct {
	ID    *string `json:"id"`
	Name  *string `json:"name"`
	Owner *string `json:"owner"`
	UID   *string `json:"uid"`
}

type AllCollections200ApplicationJSON struct {
	Collections []AllCollections200ApplicationJSONCollections `json:"collections"`
}

type AllCollectionsResponse struct {
	ContentType                            string
	StatusCode                             int64
	AllCollections200ApplicationJSONObject *AllCollections200ApplicationJSON
}
