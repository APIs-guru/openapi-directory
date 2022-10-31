package operations

import (
"openapi/pkg/models/shared")


type AndroidpublisherEditsImagesDeleteallImageTypeEnum string

const (
    AndroidpublisherEditsImagesDeleteallImageTypeEnumAppImageTypeUnspecified AndroidpublisherEditsImagesDeleteallImageTypeEnum = "appImageTypeUnspecified"
AndroidpublisherEditsImagesDeleteallImageTypeEnumPhoneScreenshots AndroidpublisherEditsImagesDeleteallImageTypeEnum = "phoneScreenshots"
AndroidpublisherEditsImagesDeleteallImageTypeEnumSevenInchScreenshots AndroidpublisherEditsImagesDeleteallImageTypeEnum = "sevenInchScreenshots"
AndroidpublisherEditsImagesDeleteallImageTypeEnumTenInchScreenshots AndroidpublisherEditsImagesDeleteallImageTypeEnum = "tenInchScreenshots"
AndroidpublisherEditsImagesDeleteallImageTypeEnumTvScreenshots AndroidpublisherEditsImagesDeleteallImageTypeEnum = "tvScreenshots"
AndroidpublisherEditsImagesDeleteallImageTypeEnumWearScreenshots AndroidpublisherEditsImagesDeleteallImageTypeEnum = "wearScreenshots"
AndroidpublisherEditsImagesDeleteallImageTypeEnumIcon AndroidpublisherEditsImagesDeleteallImageTypeEnum = "icon"
AndroidpublisherEditsImagesDeleteallImageTypeEnumFeatureGraphic AndroidpublisherEditsImagesDeleteallImageTypeEnum = "featureGraphic"
AndroidpublisherEditsImagesDeleteallImageTypeEnumTvBanner AndroidpublisherEditsImagesDeleteallImageTypeEnum = "tvBanner"
)


type AndroidpublisherEditsImagesDeleteallPathParams struct {
    EditID string `pathParam:"style=simple,explode=false,name=editId"`
    ImageType AndroidpublisherEditsImagesDeleteallImageTypeEnum `pathParam:"style=simple,explode=false,name=imageType"`
    Language string `pathParam:"style=simple,explode=false,name=language"`
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    
}

type AndroidpublisherEditsImagesDeleteallQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AndroidpublisherEditsImagesDeleteallSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherEditsImagesDeleteallRequest struct {
    PathParams AndroidpublisherEditsImagesDeleteallPathParams 
    QueryParams AndroidpublisherEditsImagesDeleteallQueryParams 
    Security AndroidpublisherEditsImagesDeleteallSecurity 
    
}

type AndroidpublisherEditsImagesDeleteallResponse struct {
    ContentType string 
    ImagesDeleteAllResponse *shared.ImagesDeleteAllResponse 
    StatusCode int64 
    
}

