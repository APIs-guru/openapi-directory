package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidmanagementEnterprisesCreateQueryParams struct {
	DollarXgafv       *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string           `queryParam:"style=form,explode=true,name=access_token"`
	AgreementAccepted *bool             `queryParam:"style=form,explode=true,name=agreementAccepted"`
	Alt               *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string           `queryParam:"style=form,explode=true,name=callback"`
	EnterpriseToken   *string           `queryParam:"style=form,explode=true,name=enterpriseToken"`
	Fields            *string           `queryParam:"style=form,explode=true,name=fields"`
	Key               *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken        *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint       *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	ProjectID         *string           `queryParam:"style=form,explode=true,name=projectId"`
	QuotaUser         *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	SignupURLName     *string           `queryParam:"style=form,explode=true,name=signupUrlName"`
	UploadType        *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AndroidmanagementEnterprisesCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidmanagementEnterprisesCreateRequest struct {
	QueryParams AndroidmanagementEnterprisesCreateQueryParams
	Request     *shared.Enterprise `request:"mediaType=application/json"`
	Security    AndroidmanagementEnterprisesCreateSecurity
}

type AndroidmanagementEnterprisesCreateResponse struct {
	ContentType string
	Enterprise  *shared.Enterprise
	StatusCode  int64
}
