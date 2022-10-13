package operations

import (
	"openapi/pkg/models/shared"
)

type DirectoryResourcesCalendarsUpdatePathParams struct {
	CalendarResourceID string `pathParam:"style=simple,explode=false,name=calendarResourceId"`
	Customer           string `pathParam:"style=simple,explode=false,name=customer"`
}

type DirectoryResourcesCalendarsUpdateQueryParams struct {
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

type DirectoryResourcesCalendarsUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryResourcesCalendarsUpdateRequest struct {
	PathParams  DirectoryResourcesCalendarsUpdatePathParams
	QueryParams DirectoryResourcesCalendarsUpdateQueryParams
	Request     *shared.CalendarResource `request:"mediaType=application/json"`
	Security    DirectoryResourcesCalendarsUpdateSecurity
}

type DirectoryResourcesCalendarsUpdateResponse struct {
	CalendarResource *shared.CalendarResource
	ContentType      string
	StatusCode       int64
}
