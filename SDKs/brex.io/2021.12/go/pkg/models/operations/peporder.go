package operations

import (
	"openapi/pkg/models/shared"
)

type PepOrderTypeEnum string

const (
	PepOrderTypeEnumUnknown PepOrderTypeEnum = ""
	PepOrderTypeEnumB       PepOrderTypeEnum = "B"
	PepOrderTypeEnumP       PepOrderTypeEnum = "P"
)

type PepOrderPathParams struct {
	Search string           `pathParam:"style=simple,explode=false,name=search"`
	Type   PepOrderTypeEnum `pathParam:"style=simple,explode=false,name=type"`
}

type PepOrderRequestBody struct {
	Aliases    *string `form:"name=Aliases"`
	Country    *string `form:"name=Country"`
	Dob        *string `form:"name=DOB"`
	FamilyName *string `form:"name=FamilyName"`
	Filters    *string `form:"name=Filters"`
	GivenName  *string `form:"name=GivenName"`
	Lei        *string `form:"name=LEI"`
	Locale     *string `form:"name=Locale"`
	Medialists *string `form:"name=Medialists"`
	MiddleName *string `form:"name=MiddleName"`
	Monitoring *bool   `form:"name=Monitoring"`
	Peplists   *string `form:"name=Peplists"`
	Region     *string `form:"name=Region"`
	SmartMatch *bool   `form:"name=SmartMatch"`
	Watchlists *string `form:"name=Watchlists"`
	Webhook    *string `form:"name=Webhook"`
}

type PepOrderSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type PepOrderRequest struct {
	PathParams PepOrderPathParams
	Request    *PepOrderRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   PepOrderSecurity
}

type PepOrderResponse struct {
	ContentType                       string
	PepOrder200ApplicationJSONAny     *interface{}
	PepOrderDefaultApplicationJSONAny *interface{}
	StatusCode                        int64
}
