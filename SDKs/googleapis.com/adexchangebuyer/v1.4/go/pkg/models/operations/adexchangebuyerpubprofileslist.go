package operations

import (
	"openapi/pkg/models/shared"
)

type AdexchangebuyerPubprofilesListPathParams struct {
	AccountID int64 `pathParam:"style=simple,explode=false,name=accountId"`
}

type AdexchangebuyerPubprofilesListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdexchangebuyerPubprofilesListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdexchangebuyerPubprofilesListRequest struct {
	PathParams  AdexchangebuyerPubprofilesListPathParams
	QueryParams AdexchangebuyerPubprofilesListQueryParams
	Security    AdexchangebuyerPubprofilesListSecurity
}

type AdexchangebuyerPubprofilesListResponse struct {
	ContentType                             string
	GetPublisherProfilesByAccountIDResponse *shared.GetPublisherProfilesByAccountIDResponse
	StatusCode                              int64
}
