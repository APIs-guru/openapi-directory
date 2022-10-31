package operations

import (
"openapi/pkg/models/shared")

type AccesscontextmanagerAccessPoliciesAccessLevelsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}


type AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnum string

const (
    AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnumLevelFormatUnspecified AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnum = "LEVEL_FORMAT_UNSPECIFIED"
AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnumAsDefined AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnum = "AS_DEFINED"
AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnumCel AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnum = "CEL"
)


type AccesscontextmanagerAccessPoliciesAccessLevelsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessLevelFormat *AccesscontextmanagerAccessPoliciesAccessLevelsListAccessLevelFormatEnum `queryParam:"style=form,explode=true,name=accessLevelFormat"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AccesscontextmanagerAccessPoliciesAccessLevelsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AccesscontextmanagerAccessPoliciesAccessLevelsListRequest struct {
    PathParams AccesscontextmanagerAccessPoliciesAccessLevelsListPathParams 
    QueryParams AccesscontextmanagerAccessPoliciesAccessLevelsListQueryParams 
    Security AccesscontextmanagerAccessPoliciesAccessLevelsListSecurity 
    
}

type AccesscontextmanagerAccessPoliciesAccessLevelsListResponse struct {
    ContentType string 
    ListAccessLevelsResponse *shared.ListAccessLevelsResponse 
    StatusCode int64 
    
}

