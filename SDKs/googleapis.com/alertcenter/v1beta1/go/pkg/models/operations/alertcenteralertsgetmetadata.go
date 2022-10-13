package operations

import (
	"openapi/pkg/models/shared"
)

type AlertcenterAlertsGetMetadataPathParams struct {
	AlertID string `pathParam:"style=simple,explode=false,name=alertId"`
}

type AlertcenterAlertsGetMetadataQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	CustomerID     *string           `queryParam:"style=form,explode=true,name=customerId"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AlertcenterAlertsGetMetadataSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AlertcenterAlertsGetMetadataRequest struct {
	PathParams  AlertcenterAlertsGetMetadataPathParams
	QueryParams AlertcenterAlertsGetMetadataQueryParams
	Security    AlertcenterAlertsGetMetadataSecurity
}

type AlertcenterAlertsGetMetadataResponse struct {
	AlertMetadata *shared.AlertMetadata
	ContentType   string
	StatusCode    int64
}
