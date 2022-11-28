package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams struct {
	DollarXgafv                     *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken                     *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                             *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback                        *string           `queryParam:"style=form,explode=true,name=callback"`
	CapacityCommitmentID            *string           `queryParam:"style=form,explode=true,name=capacityCommitmentId"`
	EnforceSingleAdminProjectPerOrg *bool             `queryParam:"style=form,explode=true,name=enforceSingleAdminProjectPerOrg"`
	Fields                          *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                             *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken                      *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint                     *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser                       *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType                      *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol                  *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity struct {
	Option1 *BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption1 `security:"option"`
	Option2 *BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurityOption2 `security:"option"`
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsCreateRequest struct {
	PathParams  BigqueryreservationProjectsLocationsCapacityCommitmentsCreatePathParams
	QueryParams BigqueryreservationProjectsLocationsCapacityCommitmentsCreateQueryParams
	Request     *shared.CapacityCommitmentInput `request:"mediaType=application/json"`
	Security    BigqueryreservationProjectsLocationsCapacityCommitmentsCreateSecurity
}

type BigqueryreservationProjectsLocationsCapacityCommitmentsCreateResponse struct {
	CapacityCommitment *shared.CapacityCommitment
	ContentType        string
	StatusCode         int64
}
