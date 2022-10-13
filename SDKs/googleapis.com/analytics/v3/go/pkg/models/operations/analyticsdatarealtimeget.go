package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsDataRealtimeGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Dimensions  *string         `queryParam:"style=form,explode=true,name=dimensions"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Filters     *string         `queryParam:"style=form,explode=true,name=filters"`
	Ids         string          `queryParam:"style=form,explode=true,name=ids"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults  *int64          `queryParam:"style=form,explode=true,name=max-results"`
	Metrics     string          `queryParam:"style=form,explode=true,name=metrics"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	Sort        *string         `queryParam:"style=form,explode=true,name=sort"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsDataRealtimeGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsDataRealtimeGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsDataRealtimeGetSecurity struct {
	Option1 *AnalyticsDataRealtimeGetSecurityOption1 `security:"option"`
	Option2 *AnalyticsDataRealtimeGetSecurityOption2 `security:"option"`
}

type AnalyticsDataRealtimeGetRequest struct {
	QueryParams AnalyticsDataRealtimeGetQueryParams
	Security    AnalyticsDataRealtimeGetSecurity
}

type AnalyticsDataRealtimeGetResponse struct {
	ContentType  string
	RealtimeData *shared.RealtimeData
	StatusCode   int64
}
