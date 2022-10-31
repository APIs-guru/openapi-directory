package operations

import (
"openapi/pkg/models/shared")

type GetCharityOrgPathParams struct {
    CharityOrgID string `pathParam:"style=simple,explode=false,name=charity_org_id"`
    
}

type GetCharityOrgHeaders struct {
    XEbayCMarketplaceID string `header:"style=simple,explode=false,name=X-EBAY-C-MARKETPLACE-ID"`
    
}

type GetCharityOrgSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetCharityOrgRequest struct {
    PathParams GetCharityOrgPathParams 
    Headers GetCharityOrgHeaders 
    Security GetCharityOrgSecurity 
    
}

type GetCharityOrgResponse struct {
    CharityOrg *shared.CharityOrg 
    ContentType string 
    StatusCode int64 
    
}

