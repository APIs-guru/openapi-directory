package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum string

const (
	AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnumMain  AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum = "main"
	AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnumPatch AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum = "patch"
)

type AndroidpublisherEditsExpansionfilesGetPathParams struct {
	ApkVersionCode    int64                                                       `pathParam:"style=simple,explode=false,name=apkVersionCode"`
	EditID            string                                                      `pathParam:"style=simple,explode=false,name=editId"`
	ExpansionFileType AndroidpublisherEditsExpansionfilesGetExpansionFileTypeEnum `pathParam:"style=simple,explode=false,name=expansionFileType"`
	PackageName       string                                                      `pathParam:"style=simple,explode=false,name=packageName"`
}

type AndroidpublisherEditsExpansionfilesGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AndroidpublisherEditsExpansionfilesGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherEditsExpansionfilesGetRequest struct {
	PathParams  AndroidpublisherEditsExpansionfilesGetPathParams
	QueryParams AndroidpublisherEditsExpansionfilesGetQueryParams
	Security    AndroidpublisherEditsExpansionfilesGetSecurity
}

type AndroidpublisherEditsExpansionfilesGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
