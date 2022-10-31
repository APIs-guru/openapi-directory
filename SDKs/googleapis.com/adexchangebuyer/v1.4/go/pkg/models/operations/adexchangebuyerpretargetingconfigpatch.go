package operations

import (
"openapi/pkg/models/shared")

type AdexchangebuyerPretargetingConfigPatchPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ConfigID string `pathParam:"style=simple,explode=false,name=configId"`
    
}

type AdexchangebuyerPretargetingConfigPatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdexchangebuyerPretargetingConfigPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdexchangebuyerPretargetingConfigPatchRequest struct {
    PathParams AdexchangebuyerPretargetingConfigPatchPathParams 
    QueryParams AdexchangebuyerPretargetingConfigPatchQueryParams 
    Request *shared.PretargetingConfig `request:"mediaType=application/json"`
    Security AdexchangebuyerPretargetingConfigPatchSecurity 
    
}

type AdexchangebuyerPretargetingConfigPatchResponse struct {
    ContentType string 
    PretargetingConfig *shared.PretargetingConfig 
    StatusCode int64 
    
}

