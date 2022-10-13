package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsDataGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Dimensions  *string         `queryParam:"style=form,explode=true,name=dimensions"`
	EndDate     string          `queryParam:"style=form,explode=true,name=end-date"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Filters     *string         `queryParam:"style=form,explode=true,name=filters"`
	Ids         string          `queryParam:"style=form,explode=true,name=ids"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults  *int64          `queryParam:"style=form,explode=true,name=max-results"`
	Metrics     string          `queryParam:"style=form,explode=true,name=metrics"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	Segment     *string         `queryParam:"style=form,explode=true,name=segment"`
	Sort        *string         `queryParam:"style=form,explode=true,name=sort"`
	StartDate   string          `queryParam:"style=form,explode=true,name=start-date"`
	StartIndex  *int64          `queryParam:"style=form,explode=true,name=start-index"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsDataGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsDataGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsDataGetSecurity struct {
	Option1 *AnalyticsDataGetSecurityOption1 `security:"option"`
	Option2 *AnalyticsDataGetSecurityOption2 `security:"option"`
}

type AnalyticsDataGetRequest struct {
	QueryParams AnalyticsDataGetQueryParams
	Security    AnalyticsDataGetSecurity
}

type AnalyticsDataGetResponse struct {
	ContentType string
	StatusCode  int64
}
