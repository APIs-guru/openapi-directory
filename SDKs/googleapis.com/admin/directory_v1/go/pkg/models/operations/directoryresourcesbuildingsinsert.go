package operations

import (
	"openapi/pkg/models/shared"
)

type DirectoryResourcesBuildingsInsertPathParams struct {
	Customer string `pathParam:"style=simple,explode=false,name=customer"`
}

type DirectoryResourcesBuildingsInsertCoordinatesSourceEnum string

const (
	DirectoryResourcesBuildingsInsertCoordinatesSourceEnumClientSpecified     DirectoryResourcesBuildingsInsertCoordinatesSourceEnum = "CLIENT_SPECIFIED"
	DirectoryResourcesBuildingsInsertCoordinatesSourceEnumResolvedFromAddress DirectoryResourcesBuildingsInsertCoordinatesSourceEnum = "RESOLVED_FROM_ADDRESS"
	DirectoryResourcesBuildingsInsertCoordinatesSourceEnumSourceUnspecified   DirectoryResourcesBuildingsInsertCoordinatesSourceEnum = "SOURCE_UNSPECIFIED"
)

type DirectoryResourcesBuildingsInsertQueryParams struct {
	DollarXgafv       *shared.XgafvEnum                                       `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken       *string                                                 `queryParam:"style=form,explode=true,name=access_token"`
	Alt               *shared.AltEnum                                         `queryParam:"style=form,explode=true,name=alt"`
	Callback          *string                                                 `queryParam:"style=form,explode=true,name=callback"`
	CoordinatesSource *DirectoryResourcesBuildingsInsertCoordinatesSourceEnum `queryParam:"style=form,explode=true,name=coordinatesSource"`
	Fields            *string                                                 `queryParam:"style=form,explode=true,name=fields"`
	Key               *string                                                 `queryParam:"style=form,explode=true,name=key"`
	OauthToken        *string                                                 `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint       *bool                                                   `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser         *string                                                 `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType        *string                                                 `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol    *string                                                 `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DirectoryResourcesBuildingsInsertSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryResourcesBuildingsInsertRequest struct {
	PathParams  DirectoryResourcesBuildingsInsertPathParams
	QueryParams DirectoryResourcesBuildingsInsertQueryParams
	Request     *shared.Building `request:"mediaType=application/json"`
	Security    DirectoryResourcesBuildingsInsertSecurity
}

type DirectoryResourcesBuildingsInsertResponse struct {
	Building    *shared.Building
	ContentType string
	StatusCode  int64
}
