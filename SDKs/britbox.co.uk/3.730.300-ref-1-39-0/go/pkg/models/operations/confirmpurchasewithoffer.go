package operations

import (
"openapi/pkg/models/shared")

type ConfirmPurchaseWithOfferPathParams struct {
    Platform string `pathParam:"style=simple,explode=false,name=platform"`
    
}

type ConfirmPurchaseWithOfferQueryParams struct {
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type ConfirmPurchaseWithOfferSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type ConfirmPurchaseWithOfferRequest struct {
    PathParams ConfirmPurchaseWithOfferPathParams 
    QueryParams ConfirmPurchaseWithOfferQueryParams 
    Request shared.ItvPurchaseWithOfferRequest `request:"mediaType=application/json"`
    Security ConfirmPurchaseWithOfferSecurity 
    
}

type ConfirmPurchaseWithOfferResponse struct {
    ContentType string 
    ItvPurchaseWithOfferResponse *shared.ItvPurchaseWithOfferResponse 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

