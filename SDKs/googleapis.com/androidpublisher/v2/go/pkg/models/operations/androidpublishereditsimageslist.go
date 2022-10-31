package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherEditsImagesListImageTypeEnum string

const (
	AndroidpublisherEditsImagesListImageTypeEnumFeatureGraphic       AndroidpublisherEditsImagesListImageTypeEnum = "featureGraphic"
	AndroidpublisherEditsImagesListImageTypeEnumIcon                 AndroidpublisherEditsImagesListImageTypeEnum = "icon"
	AndroidpublisherEditsImagesListImageTypeEnumPhoneScreenshots     AndroidpublisherEditsImagesListImageTypeEnum = "phoneScreenshots"
	AndroidpublisherEditsImagesListImageTypeEnumPromoGraphic         AndroidpublisherEditsImagesListImageTypeEnum = "promoGraphic"
	AndroidpublisherEditsImagesListImageTypeEnumSevenInchScreenshots AndroidpublisherEditsImagesListImageTypeEnum = "sevenInchScreenshots"
	AndroidpublisherEditsImagesListImageTypeEnumTenInchScreenshots   AndroidpublisherEditsImagesListImageTypeEnum = "tenInchScreenshots"
	AndroidpublisherEditsImagesListImageTypeEnumTvBanner             AndroidpublisherEditsImagesListImageTypeEnum = "tvBanner"
	AndroidpublisherEditsImagesListImageTypeEnumTvScreenshots        AndroidpublisherEditsImagesListImageTypeEnum = "tvScreenshots"
	AndroidpublisherEditsImagesListImageTypeEnumWearScreenshots      AndroidpublisherEditsImagesListImageTypeEnum = "wearScreenshots"
)

type AndroidpublisherEditsImagesListPathParams struct {
	EditID      string                                       `pathParam:"style=simple,explode=false,name=editId"`
	ImageType   AndroidpublisherEditsImagesListImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
	Language    string                                       `pathParam:"style=simple,explode=false,name=language"`
	PackageName string                                       `pathParam:"style=simple,explode=false,name=packageName"`
}

type AndroidpublisherEditsImagesListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
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
	Body        []byte
	ContentType string
	StatusCode  int64
}
