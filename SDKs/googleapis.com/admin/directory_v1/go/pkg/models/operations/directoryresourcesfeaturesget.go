package operations

import (
	"openapi/pkg/models/shared"
)

type DirectoryResourcesFeaturesGetPathParams struct {
	Customer   string `pathParam:"style=simple,explode=false,name=customer"`
	FeatureKey string `pathParam:"style=simple,explode=false,name=featureKey"`
}

type DirectoryResourcesFeaturesGetQueryParams struct {
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

type DirectoryResourcesFeaturesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryResourcesFeaturesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryResourcesFeaturesGetSecurity struct {
	Option1 *DirectoryResourcesFeaturesGetSecurityOption1 `security:"option"`
	Option2 *DirectoryResourcesFeaturesGetSecurityOption2 `security:"option"`
}

type DirectoryResourcesFeaturesGetRequest struct {
	PathParams  DirectoryResourcesFeaturesGetPathParams
	QueryParams DirectoryResourcesFeaturesGetQueryParams
	Security    DirectoryResourcesFeaturesGetSecurity
}

type DirectoryResourcesFeaturesGetResponse struct {
	ContentType string
	Feature     *shared.Feature
	StatusCode  int64
}
