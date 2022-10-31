package shared



type APICoreDtoClickStreamHit struct {
    AccessTime *string `json:"accessTime,omitempty"`
    Browser *APICoreDtoClickStreamHitBrowserInfo `json:"browser,omitempty"`
    ClientLanguage *string `json:"clientLanguage,omitempty"`
    Conversion1 *APICoreDtoClickStreamHitConversionInfo `json:"conversion1,omitempty"`
    Conversion2 *APICoreDtoClickStreamHitConversionInfo `json:"conversion2,omitempty"`
    Conversion3 *APICoreDtoClickStreamHitConversionInfo `json:"conversion3,omitempty"`
    Conversion4 *APICoreDtoClickStreamHitConversionInfo `json:"conversion4,omitempty"`
    Conversion5 *APICoreDtoClickStreamHitConversionInfo `json:"conversion5,omitempty"`
    Conversions []APICoreDtoClickStreamHitConversionInfo `json:"conversions,omitempty"`
    Entity *APICoreDtoClickStreamHitDatapointInfo `json:"entity,omitempty"`
    IP *string `json:"ip,omitempty"`
    IsProxy *string `json:"isProxy,omitempty"`
    IsSpider *string `json:"isSpider,omitempty"`
    IsUnique *string `json:"isUnique,omitempty"`
    Location *APICoreDtoClickStreamHitLocationInfo `json:"location,omitempty"`
    Org *string `json:"org,omitempty"`
    Os *APICoreDtoClickStreamHitOsInfo `json:"os,omitempty"`
    QueryParams *string `json:"queryParams,omitempty"`
    RealDestinationURL *string `json:"realDestinationUrl,omitempty"`
    Referer *string `json:"referer,omitempty"`
    Source *APICoreDtoClickStreamHitSource `json:"source,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

