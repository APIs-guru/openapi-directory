package operations

import (
"openapi/pkg/models/shared")


type AdexchangebuyerCreativesListDealsStatusFilterEnum string

const (
    AdexchangebuyerCreativesListDealsStatusFilterEnumApproved AdexchangebuyerCreativesListDealsStatusFilterEnum = "approved"
AdexchangebuyerCreativesListDealsStatusFilterEnumConditionallyApproved AdexchangebuyerCreativesListDealsStatusFilterEnum = "conditionally_approved"
AdexchangebuyerCreativesListDealsStatusFilterEnumDisapproved AdexchangebuyerCreativesListDealsStatusFilterEnum = "disapproved"
AdexchangebuyerCreativesListDealsStatusFilterEnumNotChecked AdexchangebuyerCreativesListDealsStatusFilterEnum = "not_checked"
)



type AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum string

const (
    AdexchangebuyerCreativesListOpenAuctionStatusFilterEnumApproved AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum = "approved"
AdexchangebuyerCreativesListOpenAuctionStatusFilterEnumConditionallyApproved AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum = "conditionally_approved"
AdexchangebuyerCreativesListOpenAuctionStatusFilterEnumDisapproved AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum = "disapproved"
AdexchangebuyerCreativesListOpenAuctionStatusFilterEnumNotChecked AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum = "not_checked"
)


type AdexchangebuyerCreativesListQueryParams struct {
    AccountID []int64 `queryParam:"style=form,explode=true,name=accountId"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    BuyerCreativeID []string `queryParam:"style=form,explode=true,name=buyerCreativeId"`
    DealsStatusFilter *AdexchangebuyerCreativesListDealsStatusFilterEnum `queryParam:"style=form,explode=true,name=dealsStatusFilter"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    OpenAuctionStatusFilter *AdexchangebuyerCreativesListOpenAuctionStatusFilterEnum `queryParam:"style=form,explode=true,name=openAuctionStatusFilter"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
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

