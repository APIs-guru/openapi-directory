package operations

import (
"openapi/pkg/models/shared")

type GetCharityOrgByLegacyIDQueryParams struct {
    LegacyCharityOrgID string `queryParam:"style=form,explode=true,name=legacy_charity_org_id"`
    
}

type GetCharityOrgByLegacyIDHeaders struct {
    XEbayCMarketplaceID string `header:"style=simple,explode=false,name=X-EBAY-C-MARKETPLACE-ID"`
    
}

type GetCharityOrgByLegacyIDSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetCharityOrgByLegacyIDRequest struct {
    QueryParams GetCharityOrgByLegacyIDQueryParams 
    Headers GetCharityOrgByLegacyIDHeaders 
    Security GetCharityOrgByLegacyIDSecurity 
    
}

type GetCharityOrgByLegacyIDResponse struct {
    CharityOrg *shared.CharityOrg 
    ContentType string 
    StatusCode int64 
    
}

