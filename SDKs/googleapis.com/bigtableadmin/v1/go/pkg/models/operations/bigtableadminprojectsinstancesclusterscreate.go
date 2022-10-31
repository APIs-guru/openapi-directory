package operations

import (
"openapi/pkg/models/shared")

type BigtableadminProjectsInstancesClustersCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type BigtableadminProjectsInstancesClustersCreateQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    ClusterID *string `queryParam:"style=form,explode=true,name=clusterId"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BigtableadminProjectsInstancesClustersCreateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesClustersCreateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesClustersCreateSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesClustersCreateSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesClustersCreateSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesClustersCreateSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesClustersCreateSecurity struct {
    Option1 *BigtableadminProjectsInstancesClustersCreateSecurityOption1 `security:"option"`
    Option2 *BigtableadminProjectsInstancesClustersCreateSecurityOption2 `security:"option"`
    Option3 *BigtableadminProjectsInstancesClustersCreateSecurityOption3 `security:"option"`
    Option4 *BigtableadminProjectsInstancesClustersCreateSecurityOption4 `security:"option"`
    Option5 *BigtableadminProjectsInstancesClustersCreateSecurityOption5 `security:"option"`
    Option6 *BigtableadminProjectsInstancesClustersCreateSecurityOption6 `security:"option"`
    
}

type BigtableadminProjectsInstancesClustersCreateRequest struct {
    PathParams BigtableadminProjectsInstancesClustersCreatePathParams 
    QueryParams BigtableadminProjectsInstancesClustersCreateQueryParams 
    Request *shared.Cluster `request:"mediaType=application/json"`
    Security BigtableadminProjectsInstancesClustersCreateSecurity 
    
}

type BigtableadminProjectsInstancesClustersCreateResponse struct {
    ContentType string 
    Operation *shared.Operation 
    StatusCode int64 
    
}

