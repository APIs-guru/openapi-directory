package operations

type GetLatestBaseCurrencyPathParams struct {
	BaseCurrency string `pathParam:"style=simple,explode=false,name=base_currency"`
}

type GetLatestBaseCurrencyRequest struct {
	PathParams GetLatestBaseCurrencyPathParams
}

type GetLatestBaseCurrency200ApplicationJSON struct {
	Base            *string            `json:"base"`
	Date            *string            `json:"date"`
	Rates           map[string]float64 `json:"rates"`
	TimeLastUpdated *int64             `json:"time_last_updated"`
}

type GetLatestBaseCurrency404ApplicationJSON struct {
	ErrorType *string `json:"error_type"`
	Result    *string `json:"result"`
}

type GetLatestBaseCurrencyResponse struct {
	ContentType                                   string
	GetLatestBaseCurrency200ApplicationJSONObject *GetLatestBaseCurrency200ApplicationJSON
	GetLatestBaseCurrency404ApplicationJSONObject *GetLatestBaseCurrency404ApplicationJSON
	StatusCode                                    int64
}
