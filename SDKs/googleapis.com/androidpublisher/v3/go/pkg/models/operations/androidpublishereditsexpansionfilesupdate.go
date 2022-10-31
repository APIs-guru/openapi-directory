package operations

import (
"openapi/pkg/models/shared")


type AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum string

const (
    AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnumExpansionFileTypeUnspecified AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum = "expansionFileTypeUnspecified"
AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnumMain AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum = "main"
AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnumPatch AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum = "patch"
)


type AndroidpublisherEditsExpansionfilesUpdatePathParams struct {
    ApkVersionCode int64 `pathParam:"style=simple,explode=false,name=apkVersionCode"`
    EditID string `pathParam:"style=simple,explode=false,name=editId"`
    ExpansionFileType AndroidpublisherEditsExpansionfilesUpdateExpansionFileTypeEnum `pathParam:"style=simple,explode=false,name=expansionFileType"`
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    
}

type AndroidpublisherEditsExpansionfilesUpdateQueryParams struct {
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

type AndroidpublisherEditsExpansionfilesUpdateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherEditsExpansionfilesUpdateRequest struct {
    PathParams AndroidpublisherEditsExpansionfilesUpdatePathParams 
    QueryParams AndroidpublisherEditsExpansionfilesUpdateQueryParams 
    Request *shared.ExpansionFile `request:"mediaType=application/json"`
    Security AndroidpublisherEditsExpansionfilesUpdateSecurity 
    
}

type AndroidpublisherEditsExpansionfilesUpdateResponse struct {
    ContentType string 
    ExpansionFile *shared.ExpansionFile 
    StatusCode int64 
    
}

