package operations

import (
	"openapi/pkg/models/shared"
)

type AlertcenterAlertsFeedbackListPathParams struct {
	AlertID string `pathParam:"style=simple,explode=false,name=alertId"`
}

type AlertcenterAlertsFeedbackListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	CustomerID     *string           `queryParam:"style=form,explode=true,name=customerId"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string           `queryParam:"style=form,explode=true,name=filter"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AlertcenterAlertsFeedbackListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AlertcenterAlertsFeedbackListRequest struct {
	PathParams  AlertcenterAlertsFeedbackListPathParams
	QueryParams AlertcenterAlertsFeedbackListQueryParams
	Security    AlertcenterAlertsFeedbackListSecurity
}

type AlertcenterAlertsFeedbackListResponse struct {
	ContentType               string
	ListAlertFeedbackResponse *shared.ListAlertFeedbackResponse
	StatusCode                int64
}
