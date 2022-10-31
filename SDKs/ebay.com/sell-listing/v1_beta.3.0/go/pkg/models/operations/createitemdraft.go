package operations

import (
"openapi/pkg/models/shared")

type CreateItemDraftHeaders struct {
    ContentLanguage *string `header:"style=simple,explode=false,name=Content-Language"`
    XEbayCMarketplaceID string `header:"style=simple,explode=false,name=X-EBAY-C-MARKETPLACE-ID"`
    
}

type CreateItemDraftSecurity struct {
    APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
    
}

type CreateItemDraftRequest struct {
    Headers CreateItemDraftHeaders 
    Request *shared.ItemDraft `request:"mediaType=application/json"`
    Security CreateItemDraftSecurity 
    
}

type CreateItemDraftResponse struct {
    ContentType string 
    ItemDraftResponse *shared.ItemDraftResponse 
    StatusCode int64 
    
}

