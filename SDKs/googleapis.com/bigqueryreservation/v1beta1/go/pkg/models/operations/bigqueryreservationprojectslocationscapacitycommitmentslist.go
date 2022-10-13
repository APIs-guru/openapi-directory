package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryreservationProjectsLocationsCapacityCommitmentsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurity struct {
	Option1 *BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption1 `security:"option"`
	Option2 *BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurityOption2 `security:"option"`
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsListRequest struct {
	PathParams  BigqueryreservationProjectsLocationsCapacityCommitmentsListPathParams
	QueryParams BigqueryreservationProjectsLocationsCapacityCommitmentsListQueryParams
	Security    BigqueryreservationProjectsLocationsCapacityCommitmentsListSecurity
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsListResponse struct {
	ContentType                     string
	ListCapacityCommitmentsResponse *shared.ListCapacityCommitmentsResponse
	StatusCode                      int64
}
