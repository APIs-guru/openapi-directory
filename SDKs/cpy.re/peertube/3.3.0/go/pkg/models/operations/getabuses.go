package operations

import (
	"openapi/pkg/models/shared"
)

type GetAbusesFilterEnum string

const (
	GetAbusesFilterEnumVideo   GetAbusesFilterEnum = "video"
	GetAbusesFilterEnumComment GetAbusesFilterEnum = "comment"
	GetAbusesFilterEnumAccount GetAbusesFilterEnum = "account"
)

type GetAbusesVideoIsEnum string

const (
	GetAbusesVideoIsEnumDeleted     GetAbusesVideoIsEnum = "deleted"
	GetAbusesVideoIsEnumBlacklisted GetAbusesVideoIsEnum = "blacklisted"
)

type GetAbusesQueryParams struct {
	Count              *int64                              `queryParam:"style=form,explode=true,name=count"`
	Filter             *GetAbusesFilterEnum                `queryParam:"style=form,explode=true,name=filter"`
	ID                 *int64                              `queryParam:"style=form,explode=true,name=id"`
	PredefinedReason   []shared.PredefinedAbuseReasonsEnum `queryParam:"style=form,explode=true,name=predefinedReason"`
	Search             *string                             `queryParam:"style=form,explode=true,name=search"`
	SearchReportee     *string                             `queryParam:"style=form,explode=true,name=searchReportee"`
	SearchReporter     *string                             `queryParam:"style=form,explode=true,name=searchReporter"`
	SearchVideo        *string                             `queryParam:"style=form,explode=true,name=searchVideo"`
	SearchVideoChannel *string                             `queryParam:"style=form,explode=true,name=searchVideoChannel"`
	Sort               *shared.AbusesSortEnum              `queryParam:"style=form,explode=true,name=sort"`
	Start              *int64                              `queryParam:"style=form,explode=true,name=start"`
	State              *int64                              `queryParam:"style=form,explode=true,name=state"`
	VideoIs            *GetAbusesVideoIsEnum               `queryParam:"style=form,explode=true,name=videoIs"`
}

type GetAbusesSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetAbuses200ApplicationJSON struct {
	Data  []interface{} `json:"data,omitempty"`
	Total *int64        `json:"total,omitempty"`
}

type GetAbusesRequest struct {
	QueryParams GetAbusesQueryParams
	Security    GetAbusesSecurity
}

type GetAbusesResponse struct {
	ContentType                       string
	StatusCode                        int64
	GetAbuses200ApplicationJSONObject *GetAbuses200ApplicationJSON
}
