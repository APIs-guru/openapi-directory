package operations



type UpdateCollectionPathParams struct {
    CollectionUID string `pathParam:"style=simple,explode=false,name=collection_uid"`
    
}

type UpdateCollectionRequestBodyCollectionInfo struct {
    PostmanID *string `json:"_postman_id,omitempty"`
    Description *string `json:"description,omitempty"`
    Name *string `json:"name,omitempty"`
    Schema *string `json:"schema,omitempty"`
    
}

type UpdateCollectionRequestBodyCollectionItemItemRequestBody struct {
    Mode *string `json:"mode,omitempty"`
    Raw *string `json:"raw,omitempty"`
    
}

type UpdateCollectionRequestBodyCollectionItemItemRequestHeader struct {
    Key *string `json:"key,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

type UpdateCollectionRequestBodyCollectionItemItemRequest struct {
    Body *UpdateCollectionRequestBodyCollectionItemItemRequestBody `json:"body,omitempty"`
    Description *string `json:"description,omitempty"`
    Header []UpdateCollectionRequestBodyCollectionItemItemRequestHeader `json:"header,omitempty"`
    Method *string `json:"method,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

type UpdateCollectionRequestBodyCollectionItemItem struct {
    Name *string `json:"name,omitempty"`
    Request *UpdateCollectionRequestBodyCollectionItemItemRequest `json:"request,omitempty"`
    
}

type UpdateCollectionRequestBodyCollectionItem struct {
    Item []UpdateCollectionRequestBodyCollectionItemItem `json:"item,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type UpdateCollectionRequestBodyCollection struct {
    Info *UpdateCollectionRequestBodyCollectionInfo `json:"info,omitempty"`
    Item []UpdateCollectionRequestBodyCollectionItem `json:"item,omitempty"`
    
}

type UpdateCollectionRequestBody struct {
    Collection *UpdateCollectionRequestBodyCollection `json:"collection,omitempty"`
    
}

type UpdateCollectionRequest struct {
    PathParams UpdateCollectionPathParams 
    Request *UpdateCollectionRequestBody `request:"mediaType=application/json"`
    
}

type UpdateCollection200ApplicationJSONCollection struct {
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    UID *string `json:"uid,omitempty"`
    
}

type UpdateCollection200ApplicationJSON struct {
    Collection *UpdateCollection200ApplicationJSONCollection `json:"collection,omitempty"`
    
}

type UpdateCollection400ApplicationJSONError struct {
    Message *string `json:"message,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type UpdateCollection400ApplicationJSON struct {
    Error *UpdateCollection400ApplicationJSONError `json:"error,omitempty"`
    
}

type UpdateCollection403ApplicationJSONError struct {
    Message *string `json:"message,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type UpdateCollection403ApplicationJSON struct {
    Error *UpdateCollection403ApplicationJSONError `json:"error,omitempty"`
    
}

type UpdateCollection404ApplicationJSONErrorDetails struct {
    ID *string `json:"id,omitempty"`
    Item *string `json:"item,omitempty"`
    
}

type UpdateCollection404ApplicationJSONError struct {
    Details *UpdateCollection404ApplicationJSONErrorDetails `json:"details,omitempty"`
    Message *string `json:"message,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type UpdateCollection404ApplicationJSON struct {
    Error *UpdateCollection404ApplicationJSONError `json:"error,omitempty"`
    
}

type UpdateCollectionResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateCollection200ApplicationJSONObject *UpdateCollection200ApplicationJSON 
    UpdateCollection400ApplicationJSONObject *UpdateCollection400ApplicationJSON 
    UpdateCollection403ApplicationJSONObject *UpdateCollection403ApplicationJSON 
    UpdateCollection404ApplicationJSONObject *UpdateCollection404ApplicationJSON 
    
}

