package operations

import (
"openapi/pkg/models/shared")


type ReportsActivitiesListApplicationNameEnum string

const (
    ReportsActivitiesListApplicationNameEnumAccessTransparency ReportsActivitiesListApplicationNameEnum = "access_transparency"
ReportsActivitiesListApplicationNameEnumAdmin ReportsActivitiesListApplicationNameEnum = "admin"
ReportsActivitiesListApplicationNameEnumCalendar ReportsActivitiesListApplicationNameEnum = "calendar"
ReportsActivitiesListApplicationNameEnumChat ReportsActivitiesListApplicationNameEnum = "chat"
ReportsActivitiesListApplicationNameEnumDrive ReportsActivitiesListApplicationNameEnum = "drive"
ReportsActivitiesListApplicationNameEnumGcp ReportsActivitiesListApplicationNameEnum = "gcp"
ReportsActivitiesListApplicationNameEnumGplus ReportsActivitiesListApplicationNameEnum = "gplus"
ReportsActivitiesListApplicationNameEnumGroups ReportsActivitiesListApplicationNameEnum = "groups"
ReportsActivitiesListApplicationNameEnumGroupsEnterprise ReportsActivitiesListApplicationNameEnum = "groups_enterprise"
ReportsActivitiesListApplicationNameEnumJamboard ReportsActivitiesListApplicationNameEnum = "jamboard"
ReportsActivitiesListApplicationNameEnumLogin ReportsActivitiesListApplicationNameEnum = "login"
ReportsActivitiesListApplicationNameEnumMeet ReportsActivitiesListApplicationNameEnum = "meet"
ReportsActivitiesListApplicationNameEnumMobile ReportsActivitiesListApplicationNameEnum = "mobile"
ReportsActivitiesListApplicationNameEnumRules ReportsActivitiesListApplicationNameEnum = "rules"
ReportsActivitiesListApplicationNameEnumSaml ReportsActivitiesListApplicationNameEnum = "saml"
ReportsActivitiesListApplicationNameEnumToken ReportsActivitiesListApplicationNameEnum = "token"
ReportsActivitiesListApplicationNameEnumUserAccounts ReportsActivitiesListApplicationNameEnum = "user_accounts"
ReportsActivitiesListApplicationNameEnumContextAwareAccess ReportsActivitiesListApplicationNameEnum = "context_aware_access"
ReportsActivitiesListApplicationNameEnumChrome ReportsActivitiesListApplicationNameEnum = "chrome"
ReportsActivitiesListApplicationNameEnumDataStudio ReportsActivitiesListApplicationNameEnum = "data_studio"
ReportsActivitiesListApplicationNameEnumKeep ReportsActivitiesListApplicationNameEnum = "keep"
)


type ReportsActivitiesListPathParams struct {
    ApplicationName ReportsActivitiesListApplicationNameEnum `pathParam:"style=simple,explode=false,name=applicationName"`
    UserKey string `pathParam:"style=simple,explode=false,name=userKey"`
    
}

type ReportsActivitiesListQueryParams struct {
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

type ReportsActivitiesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type ReportsActivitiesListRequest struct {
    PathParams ReportsActivitiesListPathParams 
    QueryParams ReportsActivitiesListQueryParams 
    Security ReportsActivitiesListSecurity 
    
}

type ReportsActivitiesListResponse struct {
    Activities *shared.Activities 
    ContentType string 
    StatusCode int64 
    
}

