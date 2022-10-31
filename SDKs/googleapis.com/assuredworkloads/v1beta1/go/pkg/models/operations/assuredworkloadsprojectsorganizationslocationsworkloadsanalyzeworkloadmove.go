package operations

import (
"openapi/pkg/models/shared")

type AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMovePathParams struct {
    Project string `pathParam:"style=simple,explode=false,name=project"`
    Target string `pathParam:"style=simple,explode=false,name=target"`
    
}

type AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Source *string `queryParam:"style=form,explode=true,name=source"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveRequest struct {
    PathParams AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMovePathParams 
    QueryParams AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams 
    Security AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveSecurity 
    
}

type AssuredworkloadsProjectsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse struct {
    ContentType string 
    GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse *shared.GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse 
    StatusCode int64 
    
}

