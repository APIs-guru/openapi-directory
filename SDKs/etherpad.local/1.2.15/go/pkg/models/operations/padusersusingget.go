package operations



type PadUsersUsingGetQueryParams struct {
    PadID *string `queryParam:"style=form,explode=true,name=padID"`
    
}

type PadUsersUsingGetRequest struct {
    QueryParams PadUsersUsingGetQueryParams 
    
}

type PadUsersUsingGet200ApplicationJSONDataPadUsers struct {
    ColorID *string `json:"colorId,omitempty"`
    ID *string `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    Timestamp *int64 `json:"timestamp,omitempty"`
    
}

type PadUsersUsingGet200ApplicationJSONData struct {
    PadUsers []PadUsersUsingGet200ApplicationJSONDataPadUsers `json:"padUsers,omitempty"`
    
}

type PadUsersUsingGet200ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data *PadUsersUsingGet200ApplicationJSONData `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type PadUsersUsingGet400ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type PadUsersUsingGet401ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type PadUsersUsingGet500ApplicationJSON struct {
    Code *int64 `json:"code,omitempty"`
    Data map[string]interface{} `json:"data,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type PadUsersUsingGetResponse struct {
    ContentType string 
    StatusCode int64 
    PadUsersUsingGet200ApplicationJSONObject *PadUsersUsingGet200ApplicationJSON 
    PadUsersUsingGet400ApplicationJSONObject *PadUsersUsingGet400ApplicationJSON 
    PadUsersUsingGet401ApplicationJSONObject *PadUsersUsingGet401ApplicationJSON 
    PadUsersUsingGet500ApplicationJSONObject *PadUsersUsingGet500ApplicationJSON 
    
}

