package shared

type APICoreDtoClickStreamHit struct {
	AccessTime         *string                                  `json:"accessTime"`
	Browser            *APICoreDtoClickStreamHitBrowserInfo     `json:"browser"`
	ClientLanguage     *string                                  `json:"clientLanguage"`
	Conversion1        *APICoreDtoClickStreamHitConversionInfo  `json:"conversion1"`
	Conversion2        *APICoreDtoClickStreamHitConversionInfo  `json:"conversion2"`
	Conversion3        *APICoreDtoClickStreamHitConversionInfo  `json:"conversion3"`
	Conversion4        *APICoreDtoClickStreamHitConversionInfo  `json:"conversion4"`
	Conversion5        *APICoreDtoClickStreamHitConversionInfo  `json:"conversion5"`
	Conversions        []APICoreDtoClickStreamHitConversionInfo `json:"conversions"`
	Entity             *APICoreDtoClickStreamHitDatapointInfo   `json:"entity"`
	IP                 *string                                  `json:"ip"`
	IsProxy            *string                                  `json:"isProxy"`
	IsSpider           *string                                  `json:"isSpider"`
	IsUnique           *string                                  `json:"isUnique"`
	Location           *APICoreDtoClickStreamHitLocationInfo    `json:"location"`
	Org                *string                                  `json:"org"`
	Os                 *APICoreDtoClickStreamHitOsInfo          `json:"os"`
	QueryParams        *string                                  `json:"queryParams"`
	RealDestinationURL *string                                  `json:"realDestinationUrl"`
	Referer            *string                                  `json:"referer"`
	Source             *APICoreDtoClickStreamHitSource          `json:"source"`
	Type               *string                                  `json:"type"`
}
