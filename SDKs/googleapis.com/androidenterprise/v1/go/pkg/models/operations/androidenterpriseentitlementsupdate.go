package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidenterpriseEntitlementsUpdatePathParams struct {
	EnterpriseID  string `pathParam:"style=simple,explode=false,name=enterpriseId"`
	EntitlementID string `pathParam:"style=simple,explode=false,name=entitlementId"`
	UserID        string `pathParam:"style=simple,explode=false,name=userId"`
}

type AndroidenterpriseEntitlementsUpdateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Install        *bool             `queryParam:"style=form,explode=true,name=install"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AndroidenterpriseEntitlementsUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidenterpriseEntitlementsUpdateRequest struct {
	PathParams  AndroidenterpriseEntitlementsUpdatePathParams
	QueryParams AndroidenterpriseEntitlementsUpdateQueryParams
	Request     *shared.Entitlement `request:"mediaType=application/json"`
	Security    AndroidenterpriseEntitlementsUpdateSecurity
}

type AndroidenterpriseEntitlementsUpdateResponse struct {
	ContentType string
	Entitlement *shared.Entitlement
	StatusCode  int64
}
