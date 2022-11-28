package operations

import (
	"openapi/pkg/models/shared"
)

type BigquerydatatransferProjectsTransferConfigsPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type BigquerydatatransferProjectsTransferConfigsPatchQueryParams struct {
	DollarXgafv        *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken        *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	AuthorizationCode  *string           `queryParam:"style=form,explode=true,name=authorizationCode"`
	Callback           *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields             *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken         *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint        *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser          *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ServiceAccountName *string           `queryParam:"style=form,explode=true,name=serviceAccountName"`
	UpdateMask         *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType         *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol     *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
	VersionInfo        *string           `queryParam:"style=form,explode=true,name=versionInfo"`
}

type BigquerydatatransferProjectsTransferConfigsPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigquerydatatransferProjectsTransferConfigsPatchRequest struct {
	PathParams  BigquerydatatransferProjectsTransferConfigsPatchPathParams
	QueryParams BigquerydatatransferProjectsTransferConfigsPatchQueryParams
	Request     *shared.TransferConfigInput `request:"mediaType=application/json"`
	Security    BigquerydatatransferProjectsTransferConfigsPatchSecurity
}

type BigquerydatatransferProjectsTransferConfigsPatchResponse struct {
	ContentType    string
	StatusCode     int64
	TransferConfig *shared.TransferConfig
}
