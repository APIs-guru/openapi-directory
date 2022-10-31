package operations

import (
"openapi/pkg/models/shared")


type AdexchangebuyerCreativesListStatusFilterEnum string

const (
    AdexchangebuyerCreativesListStatusFilterEnumApproved AdexchangebuyerCreativesListStatusFilterEnum = "approved"
AdexchangebuyerCreativesListStatusFilterEnumDisapproved AdexchangebuyerCreativesListStatusFilterEnum = "disapproved"
AdexchangebuyerCreativesListStatusFilterEnumNotChecked AdexchangebuyerCreativesListStatusFilterEnum = "not_checked"
)


type AdexchangebuyerCreativesListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StatusFilter *AdexchangebuyerCreativesListStatusFilterEnum `queryParam:"style=form,explode=true,name=statusFilter"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdexchangebuyerCreativesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdexchangebuyerCreativesListRequest struct {
    QueryParams AdexchangebuyerCreativesListQueryParams 
    Security AdexchangebuyerCreativesListSecurity 
    
}

type AdexchangebuyerCreativesListResponse struct {
    ContentType string 
    CreativesList *shared.CreativesList 
    StatusCode int64 
    
}

