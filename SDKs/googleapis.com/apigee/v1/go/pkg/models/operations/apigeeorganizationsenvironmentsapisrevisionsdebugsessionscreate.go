package operations

import (
	"openapi/pkg/models/shared"
)

type ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	Timeout        *string           `queryParam:"style=form,explode=true,name=timeout"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateRequest struct {
	PathParams  ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreatePathParams
	QueryParams ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateQueryParams
	Request     *shared.GoogleCloudApigeeV1DebugSessionInput `request:"mediaType=application/json"`
	Security    ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateSecurity
}

type ApigeeOrganizationsEnvironmentsApisRevisionsDebugsessionsCreateResponse struct {
	ContentType                     string
	GoogleCloudApigeeV1DebugSession *shared.GoogleCloudApigeeV1DebugSession
	StatusCode                      int64
}
