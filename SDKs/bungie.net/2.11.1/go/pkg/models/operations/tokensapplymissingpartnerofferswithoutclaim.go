package operations

import (
"openapi/pkg/models/shared")

type TokensApplyMissingPartnerOffersWithoutClaimPathParams struct {
    PartnerApplicationID int32 `pathParam:"style=simple,explode=false,name=partnerApplicationId"`
    TargetBnetMembershipID int64 `pathParam:"style=simple,explode=false,name=targetBnetMembershipId"`
    
}

type TokensApplyMissingPartnerOffersWithoutClaimSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type TokensApplyMissingPartnerOffersWithoutClaimRequest struct {
    PathParams TokensApplyMissingPartnerOffersWithoutClaimPathParams 
    Security TokensApplyMissingPartnerOffersWithoutClaimSecurity 
    
}

type TokensApplyMissingPartnerOffersWithoutClaimResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

