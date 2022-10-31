package operations



type PadUsersCountUsingPostQueryParams struct {
    PadID *string `queryParam:"style=form,explode=true,name=padID"`
    
}

type PadUsersCountUsingPostRequest struct {
    QueryParams PadUsersCountUsingPostQueryParams 
    
}

type PadUsersCountUsingPost200ApplicationJSONData struct {
    PadUsersCount *int64 `json:"padUsersCount,omitempty"`
    
}

type PadUsersCountUsingPost200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data *PadUsersCountUsingPost200ApplicationJSONData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type PadUsersCountUsingPost400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type PadUsersCountUsingPost401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type PadUsersCountUsingPost500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type PadUsersCountUsingPostResponse struct {
    ContentType string 
    StatusCode int64 
    PadUsersCountUsingPost200ApplicationJSONObject *PadUsersCountUsingPost200ApplicationJSON 
    PadUsersCountUsingPost400ApplicationJSONObject *PadUsersCountUsingPost400ApplicationJSON 
    PadUsersCountUsingPost401ApplicationJSONObject *PadUsersCountUsingPost401ApplicationJSON 
    PadUsersCountUsingPost500ApplicationJSONObject *PadUsersCountUsingPost500ApplicationJSON 
    
}

