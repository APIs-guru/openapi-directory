package operations

import (
"openapi/pkg/models/shared")


type AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum string

const (
    AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnumNativeCode AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum = "nativeCode"
AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnumProguard AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum = "proguard"
)


type AndroidpublisherEditsDeobfuscationfilesUploadPathParams struct {
    ApkVersionCode int64 `pathParam:"style=simple,explode=false,name=apkVersionCode"`
    DeobfuscationFileType AndroidpublisherEditsDeobfuscationfilesUploadDeobfuscationFileTypeEnum `pathParam:"style=simple,explode=false,name=deobfuscationFileType"`
    EditID string `pathParam:"style=simple,explode=false,name=editId"`
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    
}

type AndroidpublisherEditsDeobfuscationfilesUploadQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AndroidpublisherEditsDeobfuscationfilesUploadSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherEditsDeobfuscationfilesUploadRequest struct {
    PathParams AndroidpublisherEditsDeobfuscationfilesUploadPathParams 
    QueryParams AndroidpublisherEditsDeobfuscationfilesUploadQueryParams 
    Security AndroidpublisherEditsDeobfuscationfilesUploadSecurity 
    
}

type AndroidpublisherEditsDeobfuscationfilesUploadResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

