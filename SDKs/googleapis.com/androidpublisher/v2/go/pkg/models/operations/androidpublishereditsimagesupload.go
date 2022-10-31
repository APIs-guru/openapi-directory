package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherEditsImagesUploadImageTypeEnum string

const (
	AndroidpublisherEditsImagesUploadImageTypeEnumFeatureGraphic       AndroidpublisherEditsImagesUploadImageTypeEnum = "featureGraphic"
	AndroidpublisherEditsImagesUploadImageTypeEnumIcon                 AndroidpublisherEditsImagesUploadImageTypeEnum = "icon"
	AndroidpublisherEditsImagesUploadImageTypeEnumPhoneScreenshots     AndroidpublisherEditsImagesUploadImageTypeEnum = "phoneScreenshots"
	AndroidpublisherEditsImagesUploadImageTypeEnumPromoGraphic         AndroidpublisherEditsImagesUploadImageTypeEnum = "promoGraphic"
	AndroidpublisherEditsImagesUploadImageTypeEnumSevenInchScreenshots AndroidpublisherEditsImagesUploadImageTypeEnum = "sevenInchScreenshots"
	AndroidpublisherEditsImagesUploadImageTypeEnumTenInchScreenshots   AndroidpublisherEditsImagesUploadImageTypeEnum = "tenInchScreenshots"
	AndroidpublisherEditsImagesUploadImageTypeEnumTvBanner             AndroidpublisherEditsImagesUploadImageTypeEnum = "tvBanner"
	AndroidpublisherEditsImagesUploadImageTypeEnumTvScreenshots        AndroidpublisherEditsImagesUploadImageTypeEnum = "tvScreenshots"
	AndroidpublisherEditsImagesUploadImageTypeEnumWearScreenshots      AndroidpublisherEditsImagesUploadImageTypeEnum = "wearScreenshots"
)

type AndroidpublisherEditsImagesUploadPathParams struct {
	EditID      string                                         `pathParam:"style=simple,explode=false,name=editId"`
	ImageType   AndroidpublisherEditsImagesUploadImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
	Language    string                                         `pathParam:"style=simple,explode=false,name=language"`
	PackageName string                                         `pathParam:"style=simple,explode=false,name=packageName"`
}

type AndroidpublisherEditsImagesUploadQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
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
	Body        []byte
	ContentType string
	StatusCode  int64
}
