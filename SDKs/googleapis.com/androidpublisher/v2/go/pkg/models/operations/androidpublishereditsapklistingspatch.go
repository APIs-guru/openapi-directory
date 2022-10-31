package operations

import (
"openapi/pkg/models/shared")

type AndroidpublisherEditsApklistingsPatchPathParams struct {
    ApkVersionCode int64 `pathParam:"style=simple,explode=false,name=apkVersionCode"`
    EditID string `pathParam:"style=simple,explode=false,name=editId"`
    Language string `pathParam:"style=simple,explode=false,name=language"`
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    
}

type AndroidpublisherEditsApklistingsPatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AndroidpublisherEditsApklistingsPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherEditsApklistingsPatchRequest struct {
    PathParams AndroidpublisherEditsApklistingsPatchPathParams 
    QueryParams AndroidpublisherEditsApklistingsPatchQueryParams 
    Request *shared.ApkListing `request:"mediaType=application/json"`
    Security AndroidpublisherEditsApklistingsPatchSecurity 
    
}

type AndroidpublisherEditsApklistingsPatchResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

