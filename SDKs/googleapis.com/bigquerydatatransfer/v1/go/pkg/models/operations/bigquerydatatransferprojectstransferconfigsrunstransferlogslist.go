package operations

import (
	"openapi/pkg/models/shared"
)

type BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum string

const (
	BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnumMessageSeverityUnspecified BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum = "MESSAGE_SEVERITY_UNSPECIFIED"
	BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnumInfo                       BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum = "INFO"
	BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnumWarning                    BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum = "WARNING"
	BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnumError                      BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum = "ERROR"
)

type BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                                                 `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                                           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                                   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                                           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                                           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                                                           `queryParam:"style=form,explode=true,name=key"`
	MessageTypes   []BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListMessageTypesEnum `queryParam:"style=form,explode=true,name=messageTypes"`
	OauthToken     *string                                                                           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                                                            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                                                           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                                                             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                                           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                                                           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                                           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity struct {
	Option1 *BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption1 `security:"option"`
	Option2 *BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption2 `security:"option"`
	Option3 *BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurityOption3 `security:"option"`
}

type BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListRequest struct {
	PathParams  BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListPathParams
	QueryParams BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListQueryParams
	Security    BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListSecurity
}

type BigquerydatatransferProjectsTransferConfigsRunsTransferLogsListResponse struct {
	ContentType              string
	ListTransferLogsResponse *shared.ListTransferLogsResponse
	StatusCode               int64
}
