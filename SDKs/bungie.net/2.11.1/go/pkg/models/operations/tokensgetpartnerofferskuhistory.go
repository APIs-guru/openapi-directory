package operations

import (
"openapi/pkg/models/shared")

type TokensGetPartnerOfferSkuHistoryPathParams struct {
    PartnerApplicationID int32 `pathParam:"style=simple,explode=false,name=partnerApplicationId"`
    TargetBnetMembershipID int64 `pathParam:"style=simple,explode=false,name=targetBnetMembershipId"`
    
}

type TokensGetPartnerOfferSkuHistorySecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type TokensGetPartnerOfferSkuHistoryRequest struct {
    PathParams TokensGetPartnerOfferSkuHistoryPathParams 
    Security TokensGetPartnerOfferSkuHistorySecurity 
    
}

type TokensGetPartnerOfferSkuHistoryResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

