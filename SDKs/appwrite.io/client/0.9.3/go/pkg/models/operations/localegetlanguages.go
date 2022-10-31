package operations

import (
"openapi/pkg/models/shared")

type LocaleGetLanguagesSecurity struct {
    Jwt shared.SchemeJwt `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type LocaleGetLanguagesRequest struct {
    Security LocaleGetLanguagesSecurity 
    
}

type LocaleGetLanguagesResponse struct {
    ContentType string 
    StatusCode int64 
    LanguageList *shared.LanguageList 
    
}

