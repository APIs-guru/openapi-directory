package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementWebpropertiesInsertPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AnalyticsManagementWebpropertiesInsertQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementWebpropertiesInsertSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementWebpropertiesInsertRequest struct {
	PathParams  AnalyticsManagementWebpropertiesInsertPathParams
	QueryParams AnalyticsManagementWebpropertiesInsertQueryParams
	Request     *shared.WebpropertyInput `request:"mediaType=application/json"`
	Security    AnalyticsManagementWebpropertiesInsertSecurity
}

type AnalyticsManagementWebpropertiesInsertResponse struct {
	ContentType string
	StatusCode  int64
	Webproperty *shared.Webproperty
}
