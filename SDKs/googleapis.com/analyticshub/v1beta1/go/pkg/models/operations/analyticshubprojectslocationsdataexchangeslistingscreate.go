package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticshubProjectsLocationsDataExchangesListingsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type AnalyticshubProjectsLocationsDataExchangesListingsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	ListingID      *string           `queryParam:"style=form,explode=true,name=listingId"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AnalyticshubProjectsLocationsDataExchangesListingsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticshubProjectsLocationsDataExchangesListingsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticshubProjectsLocationsDataExchangesListingsCreateSecurity struct {
	Option1 *AnalyticshubProjectsLocationsDataExchangesListingsCreateSecurityOption1 `security:"option"`
	Option2 *AnalyticshubProjectsLocationsDataExchangesListingsCreateSecurityOption2 `security:"option"`
}

type AnalyticshubProjectsLocationsDataExchangesListingsCreateRequest struct {
	PathParams  AnalyticshubProjectsLocationsDataExchangesListingsCreatePathParams
	QueryParams AnalyticshubProjectsLocationsDataExchangesListingsCreateQueryParams
	Request     *shared.Listing `request:"mediaType=application/json"`
	Security    AnalyticshubProjectsLocationsDataExchangesListingsCreateSecurity
}

type AnalyticshubProjectsLocationsDataExchangesListingsCreateResponse struct {
	ContentType string
	Listing     *shared.Listing
	StatusCode  int64
}
