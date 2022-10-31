package operations

import (
	"openapi/pkg/models/shared"
)

type BigtableadminOperationsCancelPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type BigtableadminOperationsCancelQueryParams struct {
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

type BigtableadminOperationsCancelSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminOperationsCancelSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminOperationsCancelSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminOperationsCancelSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminOperationsCancelSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminOperationsCancelSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminOperationsCancelSecurity struct {
	Option1 *BigtableadminOperationsCancelSecurityOption1 `security:"option"`
	Option2 *BigtableadminOperationsCancelSecurityOption2 `security:"option"`
	Option3 *BigtableadminOperationsCancelSecurityOption3 `security:"option"`
	Option4 *BigtableadminOperationsCancelSecurityOption4 `security:"option"`
	Option5 *BigtableadminOperationsCancelSecurityOption5 `security:"option"`
	Option6 *BigtableadminOperationsCancelSecurityOption6 `security:"option"`
}

type BigtableadminOperationsCancelRequest struct {
	PathParams  BigtableadminOperationsCancelPathParams
	QueryParams BigtableadminOperationsCancelQueryParams
	Security    BigtableadminOperationsCancelSecurity
}

type BigtableadminOperationsCancelResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}
