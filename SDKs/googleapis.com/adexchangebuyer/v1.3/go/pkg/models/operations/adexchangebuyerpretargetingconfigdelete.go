package operations

import (
	"openapi/pkg/models/shared"
)

type AdexchangebuyerPretargetingConfigDeletePathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
	ConfigID  string `pathParam:"style=simple,explode=false,name=configId"`
}

type AdexchangebuyerPretargetingConfigDeleteQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdexchangebuyerPretargetingConfigDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdexchangebuyerPretargetingConfigDeleteRequest struct {
	PathParams  AdexchangebuyerPretargetingConfigDeletePathParams
	QueryParams AdexchangebuyerPretargetingConfigDeleteQueryParams
	Security    AdexchangebuyerPretargetingConfigDeleteSecurity
}

type AdexchangebuyerPretargetingConfigDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
