package operations

import (
"openapi/pkg/models/shared")

type DirectoryOrgunitsGetPathParams struct {
    CustomerID string `pathParam:"style=simple,explode=false,name=customerId"`
    OrgUnitPath string `pathParam:"style=simple,explode=false,name=orgUnitPath"`
    
}

type DirectoryOrgunitsGetQueryParams struct {
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

type DirectoryOrgunitsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryOrgunitsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryOrgunitsGetSecurity struct {
    Option1 *DirectoryOrgunitsGetSecurityOption1 `security:"option"`
    Option2 *DirectoryOrgunitsGetSecurityOption2 `security:"option"`
    
}

type DirectoryOrgunitsGetRequest struct {
    PathParams DirectoryOrgunitsGetPathParams 
    QueryParams DirectoryOrgunitsGetQueryParams 
    Security DirectoryOrgunitsGetSecurity 
    
}

type DirectoryOrgunitsGetResponse struct {
    ContentType string 
    OrgUnit *shared.OrgUnit 
    StatusCode int64 
    
}

