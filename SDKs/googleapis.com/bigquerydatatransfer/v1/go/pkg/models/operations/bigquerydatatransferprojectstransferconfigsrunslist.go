package operations

import (
	"openapi/pkg/models/shared"
)

type BigquerydatatransferProjectsTransferConfigsRunsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum string

const (
	BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnumRunAttemptUnspecified BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum = "RUN_ATTEMPT_UNSPECIFIED"
	BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnumLatest                BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum = "LATEST"
)

type BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum string

const (
	BigquerydatatransferProjectsTransferConfigsRunsListStatesEnumTransferStateUnspecified BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum = "TRANSFER_STATE_UNSPECIFIED"
	BigquerydatatransferProjectsTransferConfigsRunsListStatesEnumPending                  BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum = "PENDING"
	BigquerydatatransferProjectsTransferConfigsRunsListStatesEnumRunning                  BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum = "RUNNING"
	BigquerydatatransferProjectsTransferConfigsRunsListStatesEnumSucceeded                BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum = "SUCCEEDED"
	BigquerydatatransferProjectsTransferConfigsRunsListStatesEnumFailed                   BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum = "FAILED"
	BigquerydatatransferProjectsTransferConfigsRunsListStatesEnumCancelled                BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum = "CANCELLED"
)

type BigquerydatatransferProjectsTransferConfigsRunsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                                  `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                            `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                    `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                            `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                            `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                                            `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                            `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                                             `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                                            `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                                              `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                            `queryParam:"style=form,explode=true,name=quotaUser"`
	RunAttempt     *BigquerydatatransferProjectsTransferConfigsRunsListRunAttemptEnum `queryParam:"style=form,explode=true,name=runAttempt"`
	States         []BigquerydatatransferProjectsTransferConfigsRunsListStatesEnum    `queryParam:"style=form,explode=true,name=states"`
	UploadType     *string                                                            `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                            `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigquerydatatransferProjectsTransferConfigsRunsListSecurity struct {
	Option1 *BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption1 `security:"option"`
	Option2 *BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption2 `security:"option"`
	Option3 *BigquerydatatransferProjectsTransferConfigsRunsListSecurityOption3 `security:"option"`
}

type BigquerydatatransferProjectsTransferConfigsRunsListRequest struct {
	PathParams  BigquerydatatransferProjectsTransferConfigsRunsListPathParams
	QueryParams BigquerydatatransferProjectsTransferConfigsRunsListQueryParams
	Security    BigquerydatatransferProjectsTransferConfigsRunsListSecurity
}

type BigquerydatatransferProjectsTransferConfigsRunsListResponse struct {
	ContentType              string
	ListTransferRunsResponse *shared.ListTransferRunsResponse
	StatusCode               int64
}
