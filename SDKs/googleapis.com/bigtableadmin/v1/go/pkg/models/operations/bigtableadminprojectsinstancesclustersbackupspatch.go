package operations

import (
"openapi/pkg/models/shared")

type BigtableadminProjectsInstancesClustersBackupsPatchPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type BigtableadminProjectsInstancesClustersBackupsPatchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UpdateMask *string `queryParam:"style=form,explode=true,name=updateMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption4 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption5 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption6 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type BigtableadminProjectsInstancesClustersBackupsPatchSecurity struct {
    Option1 *BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption1 `security:"option"`
    Option2 *BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption2 `security:"option"`
    Option3 *BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption3 `security:"option"`
    Option4 *BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption4 `security:"option"`
    Option5 *BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption5 `security:"option"`
    Option6 *BigtableadminProjectsInstancesClustersBackupsPatchSecurityOption6 `security:"option"`
    
}

type BigtableadminProjectsInstancesClustersBackupsPatchRequest struct {
    PathParams BigtableadminProjectsInstancesClustersBackupsPatchPathParams 
    QueryParams BigtableadminProjectsInstancesClustersBackupsPatchQueryParams 
    Request *shared.Backup `request:"mediaType=application/json"`
    Security BigtableadminProjectsInstancesClustersBackupsPatchSecurity 
    
}

type BigtableadminProjectsInstancesClustersBackupsPatchResponse struct {
    Backup *shared.Backup 
    ContentType string 
    StatusCode int64 
    
}

