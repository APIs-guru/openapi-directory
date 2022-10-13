package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherEditsImagesUploadImageTypeEnum string

const (
	AndroidpublisherEditsImagesUploadImageTypeEnumAppImageTypeUnspecified AndroidpublisherEditsImagesUploadImageTypeEnum = "appImageTypeUnspecified"
	AndroidpublisherEditsImagesUploadImageTypeEnumPhoneScreenshots        AndroidpublisherEditsImagesUploadImageTypeEnum = "phoneScreenshots"
	AndroidpublisherEditsImagesUploadImageTypeEnumSevenInchScreenshots    AndroidpublisherEditsImagesUploadImageTypeEnum = "sevenInchScreenshots"
	AndroidpublisherEditsImagesUploadImageTypeEnumTenInchScreenshots      AndroidpublisherEditsImagesUploadImageTypeEnum = "tenInchScreenshots"
	AndroidpublisherEditsImagesUploadImageTypeEnumTvScreenshots           AndroidpublisherEditsImagesUploadImageTypeEnum = "tvScreenshots"
	AndroidpublisherEditsImagesUploadImageTypeEnumWearScreenshots         AndroidpublisherEditsImagesUploadImageTypeEnum = "wearScreenshots"
	AndroidpublisherEditsImagesUploadImageTypeEnumIcon                    AndroidpublisherEditsImagesUploadImageTypeEnum = "icon"
	AndroidpublisherEditsImagesUploadImageTypeEnumFeatureGraphic          AndroidpublisherEditsImagesUploadImageTypeEnum = "featureGraphic"
	AndroidpublisherEditsImagesUploadImageTypeEnumTvBanner                AndroidpublisherEditsImagesUploadImageTypeEnum = "tvBanner"
)

type AndroidpublisherEditsImagesUploadPathParams struct {
	EditID      string                                         `pathParam:"style=simple,explode=false,name=editId"`
	ImageType   AndroidpublisherEditsImagesUploadImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
	Language    string                                         `pathParam:"style=simple,explode=false,name=language"`
	PackageName string                                         `pathParam:"style=simple,explode=false,name=packageName"`
}

type AndroidpublisherEditsImagesUploadQueryParams struct {
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

type AndroidpublisherEditsImagesUploadSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherEditsImagesUploadRequest struct {
	PathParams  AndroidpublisherEditsImagesUploadPathParams
	QueryParams AndroidpublisherEditsImagesUploadQueryParams
	Security    AndroidpublisherEditsImagesUploadSecurity
}

type AndroidpublisherEditsImagesUploadResponse struct {
	ContentType          string
	ImagesUploadResponse *shared.ImagesUploadResponse
	StatusCode           int64
}
