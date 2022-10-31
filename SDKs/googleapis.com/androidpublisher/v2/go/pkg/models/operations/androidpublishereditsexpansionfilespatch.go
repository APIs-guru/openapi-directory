package operations

import (
"openapi/pkg/models/shared")


type AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum string

const (
    AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnumMain AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum = "main"
AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnumPatch AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum = "patch"
)


type AndroidpublisherEditsExpansionfilesPatchPathParams struct {
    ApkVersionCode int64 `pathParam:"style=simple,explode=false,name=apkVersionCode"`
    EditID string `pathParam:"style=simple,explode=false,name=editId"`
    ExpansionFileType AndroidpublisherEditsExpansionfilesPatchExpansionFileTypeEnum `pathParam:"style=simple,explode=false,name=expansionFileType"`
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    
}

type AndroidpublisherEditsExpansionfilesPatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AndroidpublisherEditsExpansionfilesPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherEditsExpansionfilesPatchRequest struct {
    PathParams AndroidpublisherEditsExpansionfilesPatchPathParams 
    QueryParams AndroidpublisherEditsExpansionfilesPatchQueryParams 
    Request *shared.ExpansionFile `request:"mediaType=application/json"`
    Security AndroidpublisherEditsExpansionfilesPatchSecurity 
    
}

type AndroidpublisherEditsExpansionfilesPatchResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

