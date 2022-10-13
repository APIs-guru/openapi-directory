package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidenterpriseEnterprisesGetServiceAccountPathParams struct {
	EnterpriseID string `pathParam:"style=simple,explode=false,name=enterpriseId"`
}

type AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum string

const (
	AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnumGoogleCredentials AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum = "googleCredentials"
	AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnumPkcs12            AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum = "pkcs12"
)

type AndroidenterpriseEnterprisesGetServiceAccountQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                         `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                   `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                           `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                   `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                   `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                                   `queryParam:"style=form,explode=true,name=key"`
	KeyType        *AndroidenterpriseEnterprisesGetServiceAccountKeyTypeEnum `queryParam:"style=form,explode=true,name=keyType"`
	OauthToken     *string                                                   `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                                     `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                   `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                                   `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                   `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AndroidenterpriseEnterprisesGetServiceAccountSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidenterpriseEnterprisesGetServiceAccountRequest struct {
	PathParams  AndroidenterpriseEnterprisesGetServiceAccountPathParams
	QueryParams AndroidenterpriseEnterprisesGetServiceAccountQueryParams
	Security    AndroidenterpriseEnterprisesGetServiceAccountSecurity
}

type AndroidenterpriseEnterprisesGetServiceAccountResponse struct {
	ContentType    string
	ServiceAccount *shared.ServiceAccount
	StatusCode     int64
}
