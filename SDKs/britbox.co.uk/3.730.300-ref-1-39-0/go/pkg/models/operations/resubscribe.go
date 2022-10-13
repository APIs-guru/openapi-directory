package operations

import (
	"openapi/pkg/models/shared"
)

type ResubscribePathParams struct {
	Platform string `pathParam:"style=simple,explode=false,name=platform"`
}

type ResubscribeQueryParams struct {
	Lang   *string `queryParam:"style=form,explode=true,name=lang"`
	PlanID string  `queryParam:"style=form,explode=true,name=planId"`
}

type ResubscribeSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type ResubscribeRequest struct {
	PathParams  ResubscribePathParams
	QueryParams ResubscribeQueryParams
	Security    ResubscribeSecurity
}

type ResubscribeResponse struct {
	ContentType                         string
	StatusCode                          int64
	Resubscribe200ApplicationJSONObject map[string]interface{}
}
