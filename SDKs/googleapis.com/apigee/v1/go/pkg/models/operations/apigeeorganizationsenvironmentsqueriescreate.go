package operations

import (
"openapi/pkg/models/shared")

type ApigeeOrganizationsEnvironmentsQueriesCreatePathParams struct {
    Parent string `pathParam:"style=simple,explode=false,name=parent"`
    
}

type ApigeeOrganizationsEnvironmentsQueriesCreateQueryParams struct {
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

type ApigeeOrganizationsEnvironmentsQueriesCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ApigeeOrganizationsEnvironmentsQueriesCreateRequest struct {
    PathParams ApigeeOrganizationsEnvironmentsQueriesCreatePathParams 
    QueryParams ApigeeOrganizationsEnvironmentsQueriesCreateQueryParams 
    Request *shared.GoogleCloudApigeeV1Query `request:"mediaType=application/json"`
    Security ApigeeOrganizationsEnvironmentsQueriesCreateSecurity 
    
}

type ApigeeOrganizationsEnvironmentsQueriesCreateResponse struct {
    ContentType string 
    GoogleCloudApigeeV1AsyncQuery *shared.GoogleCloudApigeeV1AsyncQuery 
    StatusCode int64 
    
}

