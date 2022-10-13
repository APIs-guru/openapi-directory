package operations

import (
	"openapi/pkg/models/shared"
)

type GetMyAbusesQueryParams struct {
	Count *int64                 `queryParam:"style=form,explode=true,name=count"`
	ID    *int64                 `queryParam:"style=form,explode=true,name=id"`
	Sort  *shared.AbusesSortEnum `queryParam:"style=form,explode=true,name=sort"`
	Start *int64                 `queryParam:"style=form,explode=true,name=start"`
	State *int64                 `queryParam:"style=form,explode=true,name=state"`
}

type GetMyAbusesSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetMyAbusesRequest struct {
	QueryParams GetMyAbusesQueryParams
	Security    GetMyAbusesSecurity
}

type GetMyAbuses200ApplicationJSON struct {
	Data  []interface{} `json:"data"`
	Total *int64        `json:"total"`
}

type GetMyAbusesResponse struct {
	ContentType                         string
	StatusCode                          int64
	GetMyAbuses200ApplicationJSONObject *GetMyAbuses200ApplicationJSON
}
