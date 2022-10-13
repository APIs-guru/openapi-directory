package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidenterpriseProductsGenerateApprovalURLPathParams struct {
	EnterpriseID string `pathParam:"style=simple,explode=false,name=enterpriseId"`
	ProductID    string `pathParam:"style=simple,explode=false,name=productId"`
}

type AndroidenterpriseProductsGenerateApprovalURLQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	LanguageCode   *string           `queryParam:"style=form,explode=true,name=languageCode"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AndroidenterpriseProductsGenerateApprovalURLSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidenterpriseProductsGenerateApprovalURLRequest struct {
	PathParams  AndroidenterpriseProductsGenerateApprovalURLPathParams
	QueryParams AndroidenterpriseProductsGenerateApprovalURLQueryParams
	Security    AndroidenterpriseProductsGenerateApprovalURLSecurity
}

type AndroidenterpriseProductsGenerateApprovalURLResponse struct {
	ContentType                         string
	ProductsGenerateApprovalURLResponse *shared.ProductsGenerateApprovalURLResponse
	StatusCode                          int64
}
