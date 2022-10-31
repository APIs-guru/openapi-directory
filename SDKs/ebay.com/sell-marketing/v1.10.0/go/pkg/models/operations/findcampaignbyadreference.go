package operations

import (
"openapi/pkg/models/shared")

type FindCampaignByAdReferenceQueryParams struct {
    InventoryReferenceID *string `queryParam:"style=form,explode=true,name=inventory_reference_id"`
    InventoryReferenceType *string `queryParam:"style=form,explode=true,name=inventory_reference_type"`
    ListingID *string `queryParam:"style=form,explode=true,name=listing_id"`
    
}

type FindCampaignByAdReferenceSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type FindCampaignByAdReferenceRequest struct {
    QueryParams FindCampaignByAdReferenceQueryParams 
    Security FindCampaignByAdReferenceSecurity 
    
}

type FindCampaignByAdReferenceResponse struct {
    Campaigns *shared.Campaigns 
    ContentType string 
    StatusCode int64 
    
}

