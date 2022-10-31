package operations

import (
"openapi/pkg/models/shared")

type AndroidpublisherReviewsListPathParams struct {
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    
}

type AndroidpublisherReviewsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StartIndex *int64 `queryParam:"style=form,explode=true,name=startIndex"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    TranslationLanguage *string `queryParam:"style=form,explode=true,name=translationLanguage"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AndroidpublisherReviewsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherReviewsListRequest struct {
    PathParams AndroidpublisherReviewsListPathParams 
    QueryParams AndroidpublisherReviewsListQueryParams 
    Security AndroidpublisherReviewsListSecurity 
    
}

type AndroidpublisherReviewsListResponse struct {
    ContentType string 
    ReviewsListResponse *shared.ReviewsListResponse 
    StatusCode int64 
    
}

