package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsManagementUploadsGetPathParams struct {
	AccountID          string `pathParam:"style=simple,explode=false,name=accountId"`
	CustomDataSourceID string `pathParam:"style=simple,explode=false,name=customDataSourceId"`
	UploadID           string `pathParam:"style=simple,explode=false,name=uploadId"`
	WebPropertyID      string `pathParam:"style=simple,explode=false,name=webPropertyId"`
}

type AnalyticsManagementUploadsGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AnalyticsManagementUploadsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementUploadsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementUploadsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsManagementUploadsGetSecurity struct {
	Option1 *AnalyticsManagementUploadsGetSecurityOption1 `security:"option"`
	Option2 *AnalyticsManagementUploadsGetSecurityOption2 `security:"option"`
	Option3 *AnalyticsManagementUploadsGetSecurityOption3 `security:"option"`
}

type AnalyticsManagementUploadsGetRequest struct {
	PathParams  AnalyticsManagementUploadsGetPathParams
	QueryParams AnalyticsManagementUploadsGetQueryParams
	Security    AnalyticsManagementUploadsGetSecurity
}

type AnalyticsManagementUploadsGetResponse struct {
	ContentType string
	StatusCode  int64
	Upload      *shared.Upload
}
