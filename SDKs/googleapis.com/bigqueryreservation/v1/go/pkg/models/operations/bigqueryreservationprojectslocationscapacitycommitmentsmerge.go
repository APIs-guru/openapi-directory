package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryreservationProjectsLocationsCapacityCommitmentsMergePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams struct {
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

type BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity struct {
	Option1 *BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption1 `security:"option"`
	Option2 *BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurityOption2 `security:"option"`
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsMergeRequest struct {
	PathParams  BigqueryreservationProjectsLocationsCapacityCommitmentsMergePathParams
	QueryParams BigqueryreservationProjectsLocationsCapacityCommitmentsMergeQueryParams
	Request     *shared.MergeCapacityCommitmentsRequest `request:"mediaType=application/json"`
	Security    BigqueryreservationProjectsLocationsCapacityCommitmentsMergeSecurity
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsMergeResponse struct {
	CapacityCommitment *shared.CapacityCommitment
	ContentType        string
	StatusCode         int64
}
