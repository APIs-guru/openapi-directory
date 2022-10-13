package operations

import (
	"openapi/pkg/models/shared"
)

type DirectoryOrgunitsListPathParams struct {
	CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
}

type DirectoryOrgunitsListTypeEnum string

const (
	DirectoryOrgunitsListTypeEnumAll      DirectoryOrgunitsListTypeEnum = "all"
	DirectoryOrgunitsListTypeEnumChildren DirectoryOrgunitsListTypeEnum = "children"
)

type DirectoryOrgunitsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum              `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                        `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                        `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                        `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                        `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                        `queryParam:"style=form,explode=true,name=oauth_token"`
	OrgUnitPath    *string                        `queryParam:"style=form,explode=true,name=orgUnitPath"`
	PrettyPrint    *bool                          `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                        `queryParam:"style=form,explode=true,name=quotaUser"`
	Type           *DirectoryOrgunitsListTypeEnum `queryParam:"style=form,explode=true,name=type"`
	UploadType     *string                        `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                        `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type DirectoryOrgunitsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryOrgunitsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type DirectoryOrgunitsListSecurity struct {
	Option1 *DirectoryOrgunitsListSecurityOption1 `security:"option"`
	Option2 *DirectoryOrgunitsListSecurityOption2 `security:"option"`
}

type DirectoryOrgunitsListRequest struct {
	PathParams  DirectoryOrgunitsListPathParams
	QueryParams DirectoryOrgunitsListQueryParams
	Security    DirectoryOrgunitsListSecurity
}

type DirectoryOrgunitsListResponse struct {
	ContentType string
	OrgUnits    *shared.OrgUnits
	StatusCode  int64
}
