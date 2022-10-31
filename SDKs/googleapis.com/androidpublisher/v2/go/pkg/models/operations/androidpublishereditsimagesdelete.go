package operations

import (
"openapi/pkg/models/shared")


type AndroidpublisherEditsImagesDeleteImageTypeEnum string

const (
    AndroidpublisherEditsImagesDeleteImageTypeEnumFeatureGraphic AndroidpublisherEditsImagesDeleteImageTypeEnum = "featureGraphic"
AndroidpublisherEditsImagesDeleteImageTypeEnumIcon AndroidpublisherEditsImagesDeleteImageTypeEnum = "icon"
AndroidpublisherEditsImagesDeleteImageTypeEnumPhoneScreenshots AndroidpublisherEditsImagesDeleteImageTypeEnum = "phoneScreenshots"
AndroidpublisherEditsImagesDeleteImageTypeEnumPromoGraphic AndroidpublisherEditsImagesDeleteImageTypeEnum = "promoGraphic"
AndroidpublisherEditsImagesDeleteImageTypeEnumSevenInchScreenshots AndroidpublisherEditsImagesDeleteImageTypeEnum = "sevenInchScreenshots"
AndroidpublisherEditsImagesDeleteImageTypeEnumTenInchScreenshots AndroidpublisherEditsImagesDeleteImageTypeEnum = "tenInchScreenshots"
AndroidpublisherEditsImagesDeleteImageTypeEnumTvBanner AndroidpublisherEditsImagesDeleteImageTypeEnum = "tvBanner"
AndroidpublisherEditsImagesDeleteImageTypeEnumTvScreenshots AndroidpublisherEditsImagesDeleteImageTypeEnum = "tvScreenshots"
AndroidpublisherEditsImagesDeleteImageTypeEnumWearScreenshots AndroidpublisherEditsImagesDeleteImageTypeEnum = "wearScreenshots"
)


type AndroidpublisherEditsImagesDeletePathParams struct {
    EditID string `pathParam:"style=simple,explode=false,name=editId"`
    ImageID string `pathParam:"style=simple,explode=false,name=imageId"`
    ImageType AndroidpublisherEditsImagesDeleteImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
    Language string `pathParam:"style=simple,explode=false,name=language"`
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    
}

type AndroidpublisherEditsImagesDeleteQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AndroidpublisherEditsImagesDeleteSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherEditsImagesDeleteRequest struct {
    PathParams AndroidpublisherEditsImagesDeletePathParams 
    QueryParams AndroidpublisherEditsImagesDeleteQueryParams 
    Security AndroidpublisherEditsImagesDeleteSecurity 
    
}

type AndroidpublisherEditsImagesDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}

