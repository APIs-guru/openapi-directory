package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherEditsImagesListImageTypeEnum string

const (
	AndroidpublisherEditsImagesListImageTypeEnumAppImageTypeUnspecified AndroidpublisherEditsImagesListImageTypeEnum = "appImageTypeUnspecified"
	AndroidpublisherEditsImagesListImageTypeEnumPhoneScreenshots        AndroidpublisherEditsImagesListImageTypeEnum = "phoneScreenshots"
	AndroidpublisherEditsImagesListImageTypeEnumSevenInchScreenshots    AndroidpublisherEditsImagesListImageTypeEnum = "sevenInchScreenshots"
	AndroidpublisherEditsImagesListImageTypeEnumTenInchScreenshots      AndroidpublisherEditsImagesListImageTypeEnum = "tenInchScreenshots"
	AndroidpublisherEditsImagesListImageTypeEnumTvScreenshots           AndroidpublisherEditsImagesListImageTypeEnum = "tvScreenshots"
	AndroidpublisherEditsImagesListImageTypeEnumWearScreenshots         AndroidpublisherEditsImagesListImageTypeEnum = "wearScreenshots"
	AndroidpublisherEditsImagesListImageTypeEnumIcon                    AndroidpublisherEditsImagesListImageTypeEnum = "icon"
	AndroidpublisherEditsImagesListImageTypeEnumFeatureGraphic          AndroidpublisherEditsImagesListImageTypeEnum = "featureGraphic"
	AndroidpublisherEditsImagesListImageTypeEnumTvBanner                AndroidpublisherEditsImagesListImageTypeEnum = "tvBanner"
)

type AndroidpublisherEditsImagesListPathParams struct {
	EditID      string                                       `pathParam:"style=simple,explode=false,name=editId"`
	ImageType   AndroidpublisherEditsImagesListImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
	Language    string                                       `pathParam:"style=simple,explode=false,name=language"`
	PackageName string                                       `pathParam:"style=simple,explode=false,name=packageName"`
}

type AndroidpublisherEditsImagesListQueryParams struct {
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

type AndroidpublisherEditsImagesListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherEditsImagesListRequest struct {
	PathParams  AndroidpublisherEditsImagesListPathParams
	QueryParams AndroidpublisherEditsImagesListQueryParams
	Security    AndroidpublisherEditsImagesListSecurity
}

type AndroidpublisherEditsImagesListResponse struct {
	ContentType        string
	ImagesListResponse *shared.ImagesListResponse
	StatusCode         int64
}
