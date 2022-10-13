package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1ProvincesProvinceIDProvinceIDEnum string

const (
	GetAPIV1ProvincesProvinceIDProvinceIDEnumAb GetAPIV1ProvincesProvinceIDProvinceIDEnum = "AB"
	GetAPIV1ProvincesProvinceIDProvinceIDEnumBc GetAPIV1ProvincesProvinceIDProvinceIDEnum = "BC"
	GetAPIV1ProvincesProvinceIDProvinceIDEnumMb GetAPIV1ProvincesProvinceIDProvinceIDEnum = "MB"
	GetAPIV1ProvincesProvinceIDProvinceIDEnumNb GetAPIV1ProvincesProvinceIDProvinceIDEnum = "NB"
	GetAPIV1ProvincesProvinceIDProvinceIDEnumNl GetAPIV1ProvincesProvinceIDProvinceIDEnum = "NL"
	GetAPIV1ProvincesProvinceIDProvinceIDEnumNs GetAPIV1ProvincesProvinceIDProvinceIDEnum = "NS"
	GetAPIV1ProvincesProvinceIDProvinceIDEnumNt GetAPIV1ProvincesProvinceIDProvinceIDEnum = "NT"
	GetAPIV1ProvincesProvinceIDProvinceIDEnumNu GetAPIV1ProvincesProvinceIDProvinceIDEnum = "NU"
	GetAPIV1ProvincesProvinceIDProvinceIDEnumOn GetAPIV1ProvincesProvinceIDProvinceIDEnum = "ON"
	GetAPIV1ProvincesProvinceIDProvinceIDEnumPe GetAPIV1ProvincesProvinceIDProvinceIDEnum = "PE"
	GetAPIV1ProvincesProvinceIDProvinceIDEnumQc GetAPIV1ProvincesProvinceIDProvinceIDEnum = "QC"
	GetAPIV1ProvincesProvinceIDProvinceIDEnumSk GetAPIV1ProvincesProvinceIDProvinceIDEnum = "SK"
	GetAPIV1ProvincesProvinceIDProvinceIDEnumYt GetAPIV1ProvincesProvinceIDProvinceIDEnum = "YT"
)

type GetAPIV1ProvincesProvinceIDPathParams struct {
	ProvinceID GetAPIV1ProvincesProvinceIDProvinceIDEnum `pathParam:"style=simple,explode=false,name=provinceId"`
}

type GetAPIV1ProvincesProvinceIDQueryParams struct {
	Year *string `queryParam:"style=form,explode=true,name=year"`
}

type GetAPIV1ProvincesProvinceIDRequest struct {
	PathParams  GetAPIV1ProvincesProvinceIDPathParams
	QueryParams GetAPIV1ProvincesProvinceIDQueryParams
}

type GetAPIV1ProvincesProvinceID200ApplicationJSON struct {
	Province *shared.Province `json:"province"`
}

type GetAPIV1ProvincesProvinceID404ApplicationJSON struct {
	Error *shared.Error `json:"error"`
}

type GetAPIV1ProvincesProvinceIDResponse struct {
	ContentType                                         string
	StatusCode                                          int64
	GetAPIV1ProvincesProvinceID200ApplicationJSONObject *GetAPIV1ProvincesProvinceID200ApplicationJSON
	GetAPIV1ProvincesProvinceID404ApplicationJSONObject *GetAPIV1ProvincesProvinceID404ApplicationJSON
}
