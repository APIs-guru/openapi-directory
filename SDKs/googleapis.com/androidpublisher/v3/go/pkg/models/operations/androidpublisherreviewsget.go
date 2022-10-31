package operations

import (
"openapi/pkg/models/shared")

type AndroidpublisherReviewsGetPathParams struct {
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    ReviewID string `pathParam:"style=simple,explode=false,name=reviewId"`
    
}

type AndroidpublisherReviewsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    TranslationLanguage *string `queryParam:"style=form,explode=true,name=translationLanguage"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AndroidpublisherReviewsGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherReviewsGetRequest struct {
    PathParams AndroidpublisherReviewsGetPathParams 
    QueryParams AndroidpublisherReviewsGetQueryParams 
    Security AndroidpublisherReviewsGetSecurity 
    
}

type AndroidpublisherReviewsGetResponse struct {
    ContentType string 
    Review *shared.Review 
    StatusCode int64 
    
}

