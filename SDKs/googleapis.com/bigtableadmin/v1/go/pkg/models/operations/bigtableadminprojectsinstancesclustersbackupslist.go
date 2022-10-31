package operations

import (
"openapi/pkg/models/shared")

type BigtableadminProjectsInstancesClustersBackupsListPathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type BigtableadminProjectsInstancesClustersBackupsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BigtableadminProjectsInstancesClustersBackupsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesClustersBackupsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesClustersBackupsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesClustersBackupsListSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesClustersBackupsListSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesClustersBackupsListSecurity struct {
    Option1 *BigtableadminProjectsInstancesClustersBackupsListSecurityOption1 `security:"option"`
    Option2 *BigtableadminProjectsInstancesClustersBackupsListSecurityOption2 `security:"option"`
    Option3 *BigtableadminProjectsInstancesClustersBackupsListSecurityOption3 `security:"option"`
    Option4 *BigtableadminProjectsInstancesClustersBackupsListSecurityOption4 `security:"option"`
    Option5 *BigtableadminProjectsInstancesClustersBackupsListSecurityOption5 `security:"option"`
    
}

type BigtableadminProjectsInstancesClustersBackupsListRequest struct {
    PathParams BigtableadminProjectsInstancesClustersBackupsListPathParams 
    QueryParams BigtableadminProjectsInstancesClustersBackupsListQueryParams 
    Security BigtableadminProjectsInstancesClustersBackupsListSecurity 
    
}

type BigtableadminProjectsInstancesClustersBackupsListResponse struct {
    ContentType string 
    ListBackupsResponse *shared.ListBackupsResponse 
    StatusCode int64 
    
}

