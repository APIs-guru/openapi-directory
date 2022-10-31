package operations

import (
"openapi/pkg/models/shared")

type AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeQueryParams struct {
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

type AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeRequest struct {
    PathParams AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgePathParams 
    QueryParams AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeQueryParams 
    Request *shared.GoogleCloudAssuredworkloadsV1AcknowledgeViolationRequest `request:"mediaType=application/json"`
    Security AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeSecurity 
    
}

type AssuredworkloadsOrganizationsLocationsWorkloadsViolationsAcknowledgeResponse struct {
    ContentType string 
    GoogleCloudAssuredworkloadsV1AcknowledgeViolationResponse map[string]interface{} 
    StatusCode int64 
    
}

