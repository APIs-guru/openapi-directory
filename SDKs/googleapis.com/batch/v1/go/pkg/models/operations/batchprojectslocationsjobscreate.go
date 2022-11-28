package operations

import (
	"openapi/pkg/models/shared"
)

type BatchProjectsLocationsJobsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type BatchProjectsLocationsJobsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	JobID          *string           `queryParam:"style=form,explode=true,name=jobId"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestID      *string           `queryParam:"style=form,explode=true,name=requestId"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BatchProjectsLocationsJobsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BatchProjectsLocationsJobsCreateRequest struct {
	PathParams  BatchProjectsLocationsJobsCreatePathParams
	QueryParams BatchProjectsLocationsJobsCreateQueryParams
	Request     *shared.JobInput `request:"mediaType=application/json"`
	Security    BatchProjectsLocationsJobsCreateSecurity
}

type BatchProjectsLocationsJobsCreateResponse struct {
	ContentType string
	Job         *shared.Job
	StatusCode  int64
}
