package operations



type ListPadsOfAuthorUsingPostQueryParams struct {
    AuthorID *string `queryParam:"style=form,explode=true,name=authorID"`
    
}

type ListPadsOfAuthorUsingPostRequest struct {
    QueryParams ListPadsOfAuthorUsingPostQueryParams 
    
}

type ListPadsOfAuthorUsingPost200ApplicationJSONData struct {
    PadIDs []string `json:"padIDs,omitempty"`
    
}

type ListPadsOfAuthorUsingPost200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data *ListPadsOfAuthorUsingPost200ApplicationJSONData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type ListPadsOfAuthorUsingPost400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type ListPadsOfAuthorUsingPost401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type ListPadsOfAuthorUsingPost500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type ListPadsOfAuthorUsingPostResponse struct {
    ContentType string 
    StatusCode int64 
    ListPadsOfAuthorUsingPost200ApplicationJSONObject *ListPadsOfAuthorUsingPost200ApplicationJSON 
    ListPadsOfAuthorUsingPost400ApplicationJSONObject *ListPadsOfAuthorUsingPost400ApplicationJSON 
    ListPadsOfAuthorUsingPost401ApplicationJSONObject *ListPadsOfAuthorUsingPost401ApplicationJSON 
    ListPadsOfAuthorUsingPost500ApplicationJSONObject *ListPadsOfAuthorUsingPost500ApplicationJSON 
    
}

