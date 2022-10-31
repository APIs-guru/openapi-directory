package operations

import (
"openapi/pkg/models/shared")

type DatatransferTransfersGetPathParams struct {
    DataTransferID string `pathParam:"style=simple,explode=false,name=dataTransferId"`
    
}

type DatatransferTransfersGetQueryParams struct {
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

type DatatransferTransfersGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DatatransferTransfersGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DatatransferTransfersGetSecurity struct {
    Option1 *DatatransferTransfersGetSecurityOption1 `security:"option"`
    Option2 *DatatransferTransfersGetSecurityOption2 `security:"option"`
    
}

type DatatransferTransfersGetRequest struct {
    PathParams DatatransferTransfersGetPathParams 
    QueryParams DatatransferTransfersGetQueryParams 
    Security DatatransferTransfersGetSecurity 
    
}

type DatatransferTransfersGetResponse struct {
    ContentType string 
    DataTransfer *shared.DataTransfer 
    StatusCode int64 
    
}

