package operations

import (
"openapi/pkg/models/shared")

type BigtableadminProjectsInstancesTablesGenerateConsistencyTokenPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams struct {
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

type BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity struct {
    Option1 *BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption1 `security:"option"`
    Option2 *BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption2 `security:"option"`
    Option3 *BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption3 `security:"option"`
    Option4 *BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption4 `security:"option"`
    Option5 *BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurityOption5 `security:"option"`
    
}

type BigtableadminProjectsInstancesTablesGenerateConsistencyTokenRequest struct {
    PathParams BigtableadminProjectsInstancesTablesGenerateConsistencyTokenPathParams 
    QueryParams BigtableadminProjectsInstancesTablesGenerateConsistencyTokenQueryParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security BigtableadminProjectsInstancesTablesGenerateConsistencyTokenSecurity 
    
}

type BigtableadminProjectsInstancesTablesGenerateConsistencyTokenResponse struct {
    ContentType string 
    GenerateConsistencyTokenResponse *shared.GenerateConsistencyTokenResponse 
    StatusCode int64 
    
}

