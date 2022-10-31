package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidenterpriseEnterprisesPullNotificationSetRequestModeEnum string

const (
	AndroidenterpriseEnterprisesPullNotificationSetRequestModeEnumWaitForNotifications AndroidenterpriseEnterprisesPullNotificationSetRequestModeEnum = "waitForNotifications"
	AndroidenterpriseEnterprisesPullNotificationSetRequestModeEnumReturnImmediately    AndroidenterpriseEnterprisesPullNotificationSetRequestModeEnum = "returnImmediately"
)

type AndroidenterpriseEnterprisesPullNotificationSetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                               `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                         `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                 `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                         `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                         `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                                         `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                                           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                         `queryParam:"style=form,explode=true,name=quotaUser"`
	RequestMode    *AndroidenterpriseEnterprisesPullNotificationSetRequestModeEnum `queryParam:"style=form,explode=true,name=requestMode"`
	UploadType     *string                                                         `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                         `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AndroidenterpriseEnterprisesPullNotificationSetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidenterpriseEnterprisesPullNotificationSetRequest struct {
	QueryParams AndroidenterpriseEnterprisesPullNotificationSetQueryParams
	Security    AndroidenterpriseEnterprisesPullNotificationSetSecurity
}

type AndroidenterpriseEnterprisesPullNotificationSetResponse struct {
	ContentType     string
	NotificationSet *shared.NotificationSet
	StatusCode      int64
}
