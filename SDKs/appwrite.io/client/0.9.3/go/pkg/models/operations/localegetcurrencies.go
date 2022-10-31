package operations

import (
"openapi/pkg/models/shared")

type LocaleGetCurrenciesSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type LocaleGetCurrenciesRequest struct {
    Security LocaleGetCurrenciesSecurity 
    
}

type LocaleGetCurrenciesResponse struct {
    ContentType string 
    StatusCode int64 
    CurrencyList *shared.CurrencyList 
    
}

