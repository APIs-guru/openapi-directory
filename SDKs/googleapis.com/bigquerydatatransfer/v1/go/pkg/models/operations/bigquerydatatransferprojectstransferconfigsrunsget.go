package operations

import (
	"openapi/pkg/models/shared"
)

type BigquerydatatransferProjectsTransferConfigsRunsGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams struct {
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

type BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigquerydatatransferProjectsTransferConfigsRunsGetSecurity struct {
	Option1 *BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption1 `security:"option"`
	Option2 *BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption2 `security:"option"`
	Option3 *BigquerydatatransferProjectsTransferConfigsRunsGetSecurityOption3 `security:"option"`
}

type BigquerydatatransferProjectsTransferConfigsRunsGetRequest struct {
	PathParams  BigquerydatatransferProjectsTransferConfigsRunsGetPathParams
	QueryParams BigquerydatatransferProjectsTransferConfigsRunsGetQueryParams
	Security    BigquerydatatransferProjectsTransferConfigsRunsGetSecurity
}

type BigquerydatatransferProjectsTransferConfigsRunsGetResponse struct {
	ContentType string
	StatusCode  int64
	TransferRun *shared.TransferRun
}
