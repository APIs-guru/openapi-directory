package operations

import (
"openapi/pkg/models/shared")

type TokensClaimPartnerOfferSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type TokensClaimPartnerOfferRequest struct {
    Security TokensClaimPartnerOfferSecurity 
    
}

type TokensClaimPartnerOfferResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

