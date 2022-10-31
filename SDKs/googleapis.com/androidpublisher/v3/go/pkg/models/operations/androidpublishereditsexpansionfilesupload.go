package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum string

const (
	AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnumExpansionFileTypeUnspecified AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum = "expansionFileTypeUnspecified"
	AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnumMain                         AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum = "main"
	AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnumPatch                        AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum = "patch"
)

type AndroidpublisherEditsExpansionfilesUploadPathParams struct {
	ApkVersionCode    int64                                                          `pathParam:"style=simple,explode=false,name=apkVersionCode"`
	EditID            string                                                         `pathParam:"style=simple,explode=false,name=editId"`
	ExpansionFileType AndroidpublisherEditsExpansionfilesUploadExpansionFileTypeEnum `pathParam:"style=simple,explode=false,name=expansionFileType"`
	PackageName       string                                                         `pathParam:"style=simple,explode=false,name=packageName"`
}

type AndroidpublisherEditsExpansionfilesUploadQueryParams struct {
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

type AndroidpublisherEditsExpansionfilesUploadSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherEditsExpansionfilesUploadRequest struct {
	PathParams  AndroidpublisherEditsExpansionfilesUploadPathParams
	QueryParams AndroidpublisherEditsExpansionfilesUploadQueryParams
	Security    AndroidpublisherEditsExpansionfilesUploadSecurity
}

type AndroidpublisherEditsExpansionfilesUploadResponse struct {
	ContentType                  string
	ExpansionFilesUploadResponse *shared.ExpansionFilesUploadResponse
	StatusCode                   int64
}
