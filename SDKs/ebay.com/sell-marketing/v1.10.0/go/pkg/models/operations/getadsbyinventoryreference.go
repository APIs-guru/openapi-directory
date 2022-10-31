package operations

import (
"openapi/pkg/models/shared")

type GetAdsByInventoryReferencePathParams struct {
    CampaignID string `pathParam:"style=simple,explode=false,name=campaign_id"`
    
}

type GetAdsByInventoryReferenceQueryParams struct {
    InventoryReferenceID string `queryParam:"style=form,explode=true,name=inventory_reference_id"`
    InventoryReferenceType string `queryParam:"style=form,explode=true,name=inventory_reference_type"`
    
}

type GetAdsByInventoryReferenceSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type GetAdsByInventoryReferenceRequest struct {
    PathParams GetAdsByInventoryReferencePathParams 
    QueryParams GetAdsByInventoryReferenceQueryParams 
    Security GetAdsByInventoryReferenceSecurity 
    
}

type GetAdsByInventoryReferenceResponse struct {
    Ads *shared.Ads 
    ContentType string 
    StatusCode int64 
    
}

