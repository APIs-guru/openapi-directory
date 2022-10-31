package operations

import (
"openapi/pkg/models/shared")

type BigtableadminOperationsProjectsOperationsListPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type BigtableadminOperationsProjectsOperationsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BigtableadminOperationsProjectsOperationsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminOperationsProjectsOperationsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminOperationsProjectsOperationsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminOperationsProjectsOperationsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminOperationsProjectsOperationsListSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminOperationsProjectsOperationsListSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminOperationsProjectsOperationsListSecurityOption7 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminOperationsProjectsOperationsListSecurity struct {
    Option1 *BigtableadminOperationsProjectsOperationsListSecurityOption1 `security:"option"`
    Option2 *BigtableadminOperationsProjectsOperationsListSecurityOption2 `security:"option"`
    Option3 *BigtableadminOperationsProjectsOperationsListSecurityOption3 `security:"option"`
    Option4 *BigtableadminOperationsProjectsOperationsListSecurityOption4 `security:"option"`
    Option5 *BigtableadminOperationsProjectsOperationsListSecurityOption5 `security:"option"`
    Option6 *BigtableadminOperationsProjectsOperationsListSecurityOption6 `security:"option"`
    Option7 *BigtableadminOperationsProjectsOperationsListSecurityOption7 `security:"option"`
    
}

type BigtableadminOperationsProjectsOperationsListRequest struct {
    PathParams BigtableadminOperationsProjectsOperationsListPathParams 
    QueryParams BigtableadminOperationsProjectsOperationsListQueryParams 
    Security BigtableadminOperationsProjectsOperationsListSecurity 
    
}

type BigtableadminOperationsProjectsOperationsListResponse struct {
    ContentType string 
    ListOperationsResponse *shared.ListOperationsResponse 
    StatusCode int64 
    
}

