package operations

import (
"openapi/pkg/models/shared")

type DatatransferTransfersListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CustomerID *string `queryParam:"style=form,explode=true,name=customerId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NewOwnerUserID *string `queryParam:"style=form,explode=true,name=newOwnerUserId"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OldOwnerUserID *string `queryParam:"style=form,explode=true,name=oldOwnerUserId"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Status *string `queryParam:"style=form,explode=true,name=status"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DatatransferTransfersListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DatatransferTransfersListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DatatransferTransfersListSecurity struct {
    Option1 *DatatransferTransfersListSecurityOption1 `security:"option"`
    Option2 *DatatransferTransfersListSecurityOption2 `security:"option"`
    
}

type DatatransferTransfersListRequest struct {
    QueryParams DatatransferTransfersListQueryParams 
    Security DatatransferTransfersListSecurity 
    
}

type DatatransferTransfersListResponse struct {
    ContentType string 
    DataTransfersListResponse *shared.DataTransfersListResponse 
    StatusCode int64 
    
}

