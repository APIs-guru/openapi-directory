package operations

import (
	"openapi/pkg/models/shared"
)

type Adexchangebuyer2AccountsClientsUsersGetPathParams struct {
	AccountID       string `pathParam:"style=simple,explode=false,name=accountId"`
	ClientAccountID string `pathParam:"style=simple,explode=false,name=clientAccountId"`
	UserID          string `pathParam:"style=simple,explode=false,name=userId"`
}

type Adexchangebuyer2AccountsClientsUsersGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type Adexchangebuyer2AccountsClientsUsersGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Adexchangebuyer2AccountsClientsUsersGetRequest struct {
	PathParams  Adexchangebuyer2AccountsClientsUsersGetPathParams
	QueryParams Adexchangebuyer2AccountsClientsUsersGetQueryParams
	Security    Adexchangebuyer2AccountsClientsUsersGetSecurity
}

type Adexchangebuyer2AccountsClientsUsersGetResponse struct {
	ClientUser  *shared.ClientUser
	ContentType string
	StatusCode  int64
}
