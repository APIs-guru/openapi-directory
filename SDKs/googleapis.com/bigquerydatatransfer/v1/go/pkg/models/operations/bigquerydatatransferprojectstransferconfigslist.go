package operations

import (
"openapi/pkg/models/shared")

type BigquerydatatransferProjectsTransferConfigsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type BigquerydatatransferProjectsTransferConfigsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    DataSourceIds []string `queryParam:"style=form,explode=true,name=dataSourceIds"`
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

type BigquerydatatransferProjectsTransferConfigsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigquerydatatransferProjectsTransferConfigsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigquerydatatransferProjectsTransferConfigsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigquerydatatransferProjectsTransferConfigsListSecurity struct {
    Option1 *BigquerydatatransferProjectsTransferConfigsListSecurityOption1 `security:"option"`
    Option2 *BigquerydatatransferProjectsTransferConfigsListSecurityOption2 `security:"option"`
    Option3 *BigquerydatatransferProjectsTransferConfigsListSecurityOption3 `security:"option"`
    
}

type BigquerydatatransferProjectsTransferConfigsListRequest struct {
    PathParams BigquerydatatransferProjectsTransferConfigsListPathParams 
    QueryParams BigquerydatatransferProjectsTransferConfigsListQueryParams 
    Security BigquerydatatransferProjectsTransferConfigsListSecurity 
    
}

type BigquerydatatransferProjectsTransferConfigsListResponse struct {
    ContentType string 
    ListTransferConfigsResponse *shared.ListTransferConfigsResponse 
    StatusCode int64 
    
}

