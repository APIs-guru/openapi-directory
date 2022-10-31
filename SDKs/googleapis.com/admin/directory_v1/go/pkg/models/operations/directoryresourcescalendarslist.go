package operations

import (
"openapi/pkg/models/shared")

type DirectoryResourcesCalendarsListPathParams struct {
    Customer string `pathParam:"style=simple,explode=false,name=customer"`
    
}

type DirectoryResourcesCalendarsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrderBy *string `queryParam:"style=form,explode=true,name=orderBy"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    Query *string `queryParam:"style=form,explode=true,name=query"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DirectoryResourcesCalendarsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryResourcesCalendarsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryResourcesCalendarsListSecurity struct {
    Option1 *DirectoryResourcesCalendarsListSecurityOption1 `security:"option"`
    Option2 *DirectoryResourcesCalendarsListSecurityOption2 `security:"option"`
    
}

type DirectoryResourcesCalendarsListRequest struct {
    PathParams DirectoryResourcesCalendarsListPathParams 
    QueryParams DirectoryResourcesCalendarsListQueryParams 
    Security DirectoryResourcesCalendarsListSecurity 
    
}

type DirectoryResourcesCalendarsListResponse struct {
    CalendarResources *shared.CalendarResources 
    ContentType string 
    StatusCode int64 
    
}

