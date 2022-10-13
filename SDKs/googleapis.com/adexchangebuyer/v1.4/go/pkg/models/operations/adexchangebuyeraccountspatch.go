package operations

import (
	"openapi/pkg/models/shared"
)

type AdexchangebuyerAccountsPatchPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type AdexchangebuyerAccountsPatchQueryParams struct {
	Alt                        *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	ConfirmUnsafeAccountChange *bool           `queryParam:"style=form,explode=true,name=confirmUnsafeAccountChange"`
	Fields                     *string         `queryParam:"style=form,explode=true,name=fields"`
	Key                        *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken                 *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                  *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP                     *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdexchangebuyerAccountsPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdexchangebuyerAccountsPatchRequest struct {
	PathParams  AdexchangebuyerAccountsPatchPathParams
	QueryParams AdexchangebuyerAccountsPatchQueryParams
	Request     *shared.Account `request:"mediaType=application/json"`
	Security    AdexchangebuyerAccountsPatchSecurity
}

type AdexchangebuyerAccountsPatchResponse struct {
	Account     *shared.Account
	ContentType string
	StatusCode  int64
}
