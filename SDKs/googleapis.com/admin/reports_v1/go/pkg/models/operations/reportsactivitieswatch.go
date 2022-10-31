package operations

import (
"openapi/pkg/models/shared")


type ReportsActivitiesWatchApplicationNameEnum string

const (
    ReportsActivitiesWatchApplicationNameEnumAccessTransparency ReportsActivitiesWatchApplicationNameEnum = "access_transparency"
ReportsActivitiesWatchApplicationNameEnumAdmin ReportsActivitiesWatchApplicationNameEnum = "admin"
ReportsActivitiesWatchApplicationNameEnumCalendar ReportsActivitiesWatchApplicationNameEnum = "calendar"
ReportsActivitiesWatchApplicationNameEnumChat ReportsActivitiesWatchApplicationNameEnum = "chat"
ReportsActivitiesWatchApplicationNameEnumDrive ReportsActivitiesWatchApplicationNameEnum = "drive"
ReportsActivitiesWatchApplicationNameEnumGcp ReportsActivitiesWatchApplicationNameEnum = "gcp"
ReportsActivitiesWatchApplicationNameEnumGplus ReportsActivitiesWatchApplicationNameEnum = "gplus"
ReportsActivitiesWatchApplicationNameEnumGroups ReportsActivitiesWatchApplicationNameEnum = "groups"
ReportsActivitiesWatchApplicationNameEnumGroupsEnterprise ReportsActivitiesWatchApplicationNameEnum = "groups_enterprise"
ReportsActivitiesWatchApplicationNameEnumJamboard ReportsActivitiesWatchApplicationNameEnum = "jamboard"
ReportsActivitiesWatchApplicationNameEnumLogin ReportsActivitiesWatchApplicationNameEnum = "login"
ReportsActivitiesWatchApplicationNameEnumMeet ReportsActivitiesWatchApplicationNameEnum = "meet"
ReportsActivitiesWatchApplicationNameEnumMobile ReportsActivitiesWatchApplicationNameEnum = "mobile"
ReportsActivitiesWatchApplicationNameEnumRules ReportsActivitiesWatchApplicationNameEnum = "rules"
ReportsActivitiesWatchApplicationNameEnumSaml ReportsActivitiesWatchApplicationNameEnum = "saml"
ReportsActivitiesWatchApplicationNameEnumToken ReportsActivitiesWatchApplicationNameEnum = "token"
ReportsActivitiesWatchApplicationNameEnumUserAccounts ReportsActivitiesWatchApplicationNameEnum = "user_accounts"
ReportsActivitiesWatchApplicationNameEnumContextAwareAccess ReportsActivitiesWatchApplicationNameEnum = "context_aware_access"
ReportsActivitiesWatchApplicationNameEnumChrome ReportsActivitiesWatchApplicationNameEnum = "chrome"
ReportsActivitiesWatchApplicationNameEnumDataStudio ReportsActivitiesWatchApplicationNameEnum = "data_studio"
ReportsActivitiesWatchApplicationNameEnumKeep ReportsActivitiesWatchApplicationNameEnum = "keep"
)


type ReportsActivitiesWatchPathParams struct {
    ApplicationName ReportsActivitiesWatchApplicationNameEnum `pathParam:"style=simple,explode=false,name=applicationName"`
    UserKey string `pathParam:"style=simple,explode=false,name=userKey"`
    
}

type ReportsActivitiesWatchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    ActorIPAddress *string `queryParam:"style=form,explode=true,name=actorIpAddress"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    CustomerID *string `queryParam:"style=form,explode=true,name=customerId"`
    EndTime *string `queryParam:"style=form,explode=true,name=endTime"`
    EventName *string `queryParam:"style=form,explode=true,name=eventName"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filters *string `queryParam:"style=form,explode=true,name=filters"`
    GroupIDFilter *string `queryParam:"style=form,explode=true,name=groupIdFilter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OrgUnitID *string `queryParam:"style=form,explode=true,name=orgUnitID"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StartTime *string `queryParam:"style=form,explode=true,name=startTime"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type ReportsActivitiesWatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReportsActivitiesWatchRequest struct {
    PathParams ReportsActivitiesWatchPathParams 
    QueryParams ReportsActivitiesWatchQueryParams 
    Request *shared.Channel `request:"mediaType=application/json"`
    Security ReportsActivitiesWatchSecurity 
    
}

type ReportsActivitiesWatchResponse struct {
    Channel *shared.Channel 
    ContentType string 
    StatusCode int64 
    
}

