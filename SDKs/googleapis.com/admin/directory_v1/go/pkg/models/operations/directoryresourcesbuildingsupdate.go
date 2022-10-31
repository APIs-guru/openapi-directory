package operations

import (
	"openapi/pkg/models/shared"
)

type DirectoryResourcesBuildingsUpdatePathParams struct {
	BuildingID string `pathParam:"style=simple,explode=false,name=buildingId"`
	Customer   string `pathParam:"style=simple,explode=false,name=customer"`
}

type DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum string

const (
	DirectoryResourcesBuildingsUpdateCoordinatesSourceEnumClientSpecified     DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum = "CLIENT_SPECIFIED"
	DirectoryResourcesBuildingsUpdateCoordinatesSourceEnumResolvedFromAddress DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum = "RESOLVED_FROM_ADDRESS"
	DirectoryResourcesBuildingsUpdateCoordinatesSourceEnumSourceUnspecified   DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum = "SOURCE_UNSPECIFIED"
)

type DirectoryResourcesBuildingsUpdateQueryParams struct {
	DollarXgafv       *shared.XgafvEnum                                       `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string                                                 `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum                                         `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string                                                 `queryParam:"style=form,explode=true,name=callback"`
	CoordinatesSource *DirectoryResourcesBuildingsUpdateCoordinatesSourceEnum `queryParam:"style=form,explode=true,name=coordinatesSource"`
	Fields            *string                                                 `queryParam:"style=form,explode=true,name=fields"`
	Key               *string                                                 `queryParam:"style=form,explode=true,name=key"`
	OauthToken        *string                                                 `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint       *bool                                                   `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string                                                 `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType        *string                                                 `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string                                                 `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DirectoryResourcesBuildingsUpdateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryResourcesBuildingsUpdateRequest struct {
	PathParams  DirectoryResourcesBuildingsUpdatePathParams
	QueryParams DirectoryResourcesBuildingsUpdateQueryParams
	Request     *shared.Building `request:"mediaType=application/json"`
	Security    DirectoryResourcesBuildingsUpdateSecurity
}

type DirectoryResourcesBuildingsUpdateResponse struct {
	Building    *shared.Building
	ContentType string
	StatusCode  int64
}
