package operations



type AllCollections200ApplicationJSONCollections struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Owner *string `json:"owner,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

type AllCollections200ApplicationJSON struct {
    Collections []AllCollections200ApplicationJSONCollections `json:"collections,omitempty"`
    
}

type AllCollectionsResponse struct {
    ContentType string 
    StatusCode int64 
    AllCollections200ApplicationJSONObject *AllCollections200ApplicationJSON 
    
}

