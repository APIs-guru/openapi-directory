package operations

import (
	"openapi/pkg/models/shared"
)

type Adexchangebuyer2AccountsClientsUsersUpdatePathParams struct {
	AccountID       string `pathParam:"style=simple,explode=false,name=accountId"`
	ClientAccountID string `pathParam:"style=simple,explode=false,name=clientAccountId"`
	UserID          string `pathParam:"style=simple,explode=false,name=userId"`
}

type Adexchangebuyer2AccountsClientsUsersUpdateQueryParams struct {
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

type Adexchangebuyer2AccountsClientsUsersUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Adexchangebuyer2AccountsClientsUsersUpdateRequest struct {
	PathParams  Adexchangebuyer2AccountsClientsUsersUpdatePathParams
	QueryParams Adexchangebuyer2AccountsClientsUsersUpdateQueryParams
	Request     *shared.ClientUser `request:"mediaType=application/json"`
	Security    Adexchangebuyer2AccountsClientsUsersUpdateSecurity
}

type Adexchangebuyer2AccountsClientsUsersUpdateResponse struct {
	ClientUser  *shared.ClientUser
	ContentType string
	StatusCode  int64
}
