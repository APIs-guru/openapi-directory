package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum string

const (
	AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnumDeobfuscationFileTypeUnspecified AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum = "deobfuscationFileTypeUnspecified"
	AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnumProguard                         AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum = "proguard"
	AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnumNativeCode                       AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum = "nativeCode"
)

type AndroidpublisherEditsDeobfuscationfilesUploadPathParams struct {
	ApkVersionCode        int64                                                                  `pathParam:"style=simple,explode=false,name=apkVersionCode"`
	DeobfuscationFileType AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum `pathParam:"style=simple,explode=false,name=deobfuscationFileType"`
	EditID                string                                                                 `pathParam:"style=simple,explode=false,name=editId"`
	PackageName           string                                                                 `pathParam:"style=simple,explode=false,name=packageName"`
}

type AndroidpublisherEditsDeobfuscationfilesUploadQueryParams struct {
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

type AndroidpublisherEditsDeobfuscationfilesUploadSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherEditsDeobfuscationfilesUploadRequest struct {
	PathParams  AndroidpublisherEditsDeobfuscationfilesUploadPathParams
	QueryParams AndroidpublisherEditsDeobfuscationfilesUploadQueryParams
	Security    AndroidpublisherEditsDeobfuscationfilesUploadSecurity
}

type AndroidpublisherEditsDeobfuscationfilesUploadResponse struct {
	ContentType                      string
	DeobfuscationFilesUploadResponse *shared.DeobfuscationFilesUploadResponse
	StatusCode                       int64
}
