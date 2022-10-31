package operations



type GetLatestBaseCurrencyPathParams struct {
    BaseCurrency string `pathParam:"style=simple,explode=false,name=base_currency"`
    
}

type GetLatestBaseCurrencyRequest struct {
    PathParams GetLatestBaseCurrencyPathParams 
    
}

type GetLatestBaseCurrency200ApplicationJSON struct {
    Base *string `json:"base,omitempty"`
    Date *string `json:"date,omitempty"`
    Rates map[string]float64 `json:"rates,omitempty"`
    TimeLastUpdated *int64 `json:"time_last_updated,omitempty"`
    
}

type GetLatestBaseCurrency404ApplicationJSON struct {
    ErrorType *string `json:"error_type,omitempty"`
    Result *string `json:"result,omitempty"`
    
}

type GetLatestBaseCurrencyResponse struct {
    ContentType string 
    GetLatestBaseCurrency200ApplicationJSONObject *GetLatestBaseCurrency200ApplicationJSON 
    GetLatestBaseCurrency404ApplicationJSONObject *GetLatestBaseCurrency404ApplicationJSON 
    StatusCode int64 
    
}

